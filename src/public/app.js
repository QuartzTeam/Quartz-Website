const stepList = document.querySelector("#installSteps");
const loaderTabs = document.querySelector(".loader-tabs");
const loaderButtons = [...document.querySelectorAll("[data-loader]")];
// Screenshot carousel slides — add new preview images here, one entry per slide.
const screenshots = [
  { src: "assets/mainmenu.png", caption: "Main Menu" },
  { src: "assets/ingame.png", caption: "In-Game HUD" },
  { src: "assets/credits.png", caption: "Credits Screen" }
];
let isInstallVisible = false;
let hasQueuedStepReveal = false;
let hasPlayedStepReveal = false;
let textSwitchTimer = 0;
let lightboxParts = null;
let lastLightboxTrigger = null;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
  const navigation = performance.getEntriesByType("navigation")[0];
  if (!location.hash || navigation?.type === "reload") {
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }
});

const installSteps = {
  melonloader: [
    {
      type: "note",
      parts: [
        { text: "If on Mac, there is an " },
        { text: "auto installer", href: "https://github.com/sbrothers7/UMMInstall/releases/latest" },
        { text: " for your convenience." }
      ]
    },
    {
      type: "step",
      parts: [
        { text: "Download " },
        { text: "modlist.org app", href: "https://github.com/modlist-org/modlist_org_app/releases/latest" },
        { text: " and " },
        { text: "Quartz", href: "https://github.com/QuartzTeam/Quartz/releases/latest" },
        { text: "." }
      ]
    },
    { type: "step", text: "If not installed MelonLoader yet, install it using the modlist.org app." },
    {
      type: "note",
      text: "If on Mac, In the modlist.org app, press \"Copy Native Launch Options\" in the \"Installed\" tab and paste it into your Steam launch arguments."
    },
    { type: "step", text: "Press \"Install Mod From File\" then select the zip (Quartz.zip)." },
    { type: "step", text: "Done!" }
  ],
  unitymodmanager: [
    { type: "step", marker: "0", text: "First make sure you have UnityModManager set up for ADOFAI." },
    {
      type: "step",
      parts: [
        { text: "Download " },
        { text: "QuartzUmm.zip", code: true },
        { text: " from " },
        { text: "releases", href: "https://github.com/QuartzTeam/Quartz/releases/latest" },
        { text: "." }
      ]
    },
    {
      type: "step",
      parts: [
        { text: "In the UMM installer, use \"Install mod\" and pick " },
        { text: "QuartzUmm.zip", code: true },
        { text: " - or just simply drag the " },
        { text: "QuartzUmm.zip", code: true },
        { text: " into the drag zip box" }
      ]
    },
    { type: "step", text: "Done! Open the in-game menu with the mod's keybind (settings live there, not in the UMM panel)." }
  ]
};

function getInstallSteps(loader) {
  return installSteps[loader] || installSteps.melonloader;
}

function renderInline(target, step) {
  const parts = Array.isArray(step.parts) ? step.parts : [{ text: typeof step.text === "string" ? step.text : "" }];
  parts.forEach((part) => {
    const text = typeof part.text === "string" ? part.text : "";
    const href = typeof part.href === "string" && part.href.startsWith("https://") ? part.href : "";
    let node = document.createTextNode(text);
    if (part.code) {
      node = document.createElement("code");
      node.textContent = text;
    } else if (href) {
      node = document.createElement("a");
      node.href = href;
      node.target = "_blank";
      node.rel = "noopener noreferrer";
      node.textContent = text;
    }
    target.append(node);
  });
}

function openExternalLinksInNewTabs(root = document) {
  root.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

let stepHeightCleanup = null;

function animateStepListHeight(previousHeight) {
  if (!stepList) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const newHeight = stepList.getBoundingClientRect().height;
  if (Math.abs(newHeight - previousHeight) < 1) return;
  if (stepHeightCleanup) stepHeightCleanup();
  let failsafeTimer = 0;
  const finish = () => {
    clearTimeout(failsafeTimer);
    stepList.style.height = "";
    stepList.style.overflow = "";
    stepList.style.transition = "";
    stepList.removeEventListener("transitionend", onEnd);
    stepHeightCleanup = null;
  };
  const onEnd = (event) => {
    if (event.target === stepList && event.propertyName === "height") finish();
  };
  stepHeightCleanup = finish;
  stepList.style.overflow = "hidden";
  stepList.style.transition = "none";
  stepList.style.height = `${previousHeight}px`;
  void stepList.offsetHeight;
  stepList.style.transition = "height 360ms cubic-bezier(0.22, 1, 0.36, 1)";
  stepList.style.height = `${newHeight}px`;
  stepList.addEventListener("transitionend", onEnd);
  failsafeTimer = window.setTimeout(finish, 600);
}

function renderSteps(steps) {
  if (!stepList) return;
  const previousHeight = stepList.getBoundingClientRect().height;
  if (hasPlayedStepReveal) {
    stepList.classList.add("is-static");
    stepList.classList.remove("is-text-switching");
    clearTimeout(textSwitchTimer);
  } else {
    stepList.classList.remove("is-revealing", "is-static");
  }
  let stepNumber = 1;
  stepList.replaceChildren(
    ...steps.map((entry, index) => {
      const step = typeof entry === "object" && entry ? entry : { type: "step", text: String(entry || "") };
      const isCallout = step.type === "note" || step.type === "warning";
      const item = document.createElement("li");
      const copy = document.createElement("span");
      copy.className = "step-copy";
      if (isCallout) {
        const title = document.createElement("strong");
        const body = document.createElement("span");
        item.className = `step-note${step.type === "warning" ? " is-warning" : ""}`;
        body.className = "step-note-body";
        title.className = "step-note-title";
        title.textContent = step.type === "warning" ? "Warning" : "Note";
        renderInline(body, step);
        copy.append(title, body);
      } else {
        item.dataset.marker = step.marker || String(stepNumber);
        renderInline(copy, step);
        if (!step.marker) stepNumber += 1;
      }
      item.append(copy);
      item.style.setProperty("--step-index", index);
      return item;
    })
  );
  if (hasPlayedStepReveal) {
    stepList.classList.remove("is-switching");
    void stepList.offsetWidth;
    animateStepListHeight(previousHeight);
    stepList.classList.add("is-text-switching");
    textSwitchTimer = window.setTimeout(() => stepList.classList.remove("is-text-switching"), 1800);
    return;
  }
  queueStepReveal();
}

function revealQueuedSteps() {
  if (!stepList) return;
  if (!hasQueuedStepReveal || !isInstallVisible) return;
  hasQueuedStepReveal = false;
  requestAnimationFrame(() => {
    if (!isInstallVisible) {
      hasQueuedStepReveal = true;
      return;
    }
    hasPlayedStepReveal = true;
    stepList.classList.remove("is-switching", "is-static");
    void stepList.offsetWidth;
    stepList.classList.add("is-revealing");
  });
}

function queueStepReveal() {
  hasQueuedStepReveal = true;
  revealQueuedSteps();
}

function moveLoaderThumb(button) {
  if (!loaderTabs || !button) return;
  const tabsBox = loaderTabs.getBoundingClientRect();
  const buttonBox = button.getBoundingClientRect();
  loaderTabs.style.setProperty("--tab-thumb-width", `${buttonBox.width}px`);
  loaderTabs.style.setProperty("--tab-thumb-x", `${buttonBox.left - tabsBox.left}px`);
}

function setActiveLoader(loader) {
  let activeButton = null;
  loaderButtons.forEach((button) => {
    const isActive = button.dataset.loader === loader;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    if (isActive) activeButton = button;
  });
  moveLoaderThumb(activeButton);
}

function loadSteps(loader) {
  if (!stepList) return;
  setActiveLoader(loader);
  if (!hasPlayedStepReveal) stepList.classList.add("is-switching");
  renderSteps(getInstallSteps(loader));
}

function watchStepVisibility() {
  if (!stepList) return;
  if (!("IntersectionObserver" in window)) {
    isInstallVisible = true;
    revealQueuedSteps();
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      isInstallVisible = entry.isIntersecting && entry.intersectionRatio >= 0.28;
      revealQueuedSteps();
    },
    { threshold: [0, 0.28, 0.55] }
  );
  observer.observe(stepList);
}

function setupScrollReveals() {
  const nodes = [...document.querySelectorAll("[data-reveal]")];
  if (!nodes.length) return;
  document.body.classList.add("reveal-ready");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("is-revealed"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -40px" }
  );
  nodes.forEach((node) => observer.observe(node));
}

function createScreenshotLightbox() {
  const root = document.createElement("div");
  const closeButton = document.createElement("button");
  const frame = document.createElement("figure");
  const image = document.createElement("img");
  const caption = document.createElement("figcaption");

  root.className = "shot-lightbox";
  root.hidden = true;
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-label", "Screenshot preview");
  closeButton.className = "lightbox-close";
  closeButton.type = "button";
  closeButton.textContent = "Close";
  frame.className = "lightbox-frame";
  image.className = "lightbox-image";
  caption.className = "lightbox-caption";

  frame.append(image, caption);
  root.append(closeButton, frame);
  document.body.append(root);

  root.addEventListener("click", (event) => {
    if (event.target === root) closeScreenshotLightbox();
  });
  closeButton.addEventListener("click", closeScreenshotLightbox);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeScreenshotLightbox();
  });
  return { root, closeButton, image, caption };
}

function openScreenshotLightbox(shot, trigger) {
  if (!shot || !shot.src) return;
  if (!lightboxParts) lightboxParts = createScreenshotLightbox();
  lastLightboxTrigger = trigger || null;
  lightboxParts.image.src = shot.src;
  lightboxParts.image.alt = shot.caption;
  lightboxParts.caption.textContent = shot.caption;
  lightboxParts.root.hidden = false;
  document.body.classList.add("has-lightbox");
  lightboxParts.closeButton.focus();
}

function closeScreenshotLightbox() {
  if (!lightboxParts || lightboxParts.root.hidden) return;
  lightboxParts.root.hidden = true;
  document.body.classList.remove("has-lightbox");
  lastLightboxTrigger?.focus();
}

function setupScreenshotCarousel() {
  const track = document.querySelector("#carouselTrack");
  const dotsBox = document.querySelector("#carouselDots");
  if (!track || !dotsBox) return;

  const slides = screenshots.map((shot) => {
    const slide = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");
    slide.className = "carousel-slide";
    image.src = shot.src;
    image.alt = shot.caption;
    image.loading = "lazy";
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `View ${shot.caption} fullscreen`);
    image.addEventListener("click", () => openScreenshotLightbox(shot, image));
    image.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openScreenshotLightbox(shot, image);
    });
    caption.textContent = shot.caption;
    slide.append(image, caption);
    return slide;
  });
  track.replaceChildren(...slides);

  let activeIndex = 0;
  let animationFrame = 0;
  let fadeTimer = 0;

  function slideStep() {
    return slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth;
  }

  function markActive(index) {
    activeIndex = index;
    dots.forEach((dot, dotIndex) => {
      if (dotIndex === index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function cancelSlideAnimation() {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      track.style.scrollSnapType = "";
    }
    if (fadeTimer) {
      clearTimeout(fadeTimer);
      fadeTimer = 0;
      track.style.transition = "";
      track.style.opacity = "";
    }
  }

  // Reduced motion: slide changes must not move, but a hard cut is jarring
  // too — fade out, reposition while invisible, fade back in.
  function crossfadeTrackTo(left) {
    track.style.transition = "opacity 150ms ease";
    track.style.opacity = "0";
    fadeTimer = window.setTimeout(() => {
      track.scrollTo({ left });
      track.style.opacity = "1";
      fadeTimer = window.setTimeout(() => {
        track.style.transition = "";
        track.style.opacity = "";
        fadeTimer = 0;
      }, 180);
    }, 170);
  }

  // Mandatory scroll-snap overrides smooth programmatic scrolling in several
  // engines (the snap wins and the track jumps), so slide changes animate
  // scrollLeft by hand with snapping suspended for the duration.
  function animateTrackTo(left) {
    cancelSlideAnimation();
    const from = track.scrollLeft;
    const change = left - from;
    if (Math.abs(change) < 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      crossfadeTrackTo(left);
      return;
    }
    const duration = 420;
    const start = performance.now();
    track.style.scrollSnapType = "none";
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      track.scrollLeft = from + change * eased;
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        animationFrame = 0;
        track.style.scrollSnapType = "";
      }
    };
    animationFrame = requestAnimationFrame(step);
  }

  function scrollToSlide(index) {
    const target = (index + slides.length) % slides.length;
    markActive(target);
    animateTrackTo(target * slideStep());
  }

  ["wheel", "touchstart", "pointerdown"].forEach((type) => {
    track.addEventListener(type, cancelSlideAnimation, { passive: true });
  });

  const dots = screenshots.map((shot, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to screenshot ${index + 1}: ${shot.caption}`);
    dot.addEventListener("click", () => scrollToSlide(index));
    return dot;
  });
  dotsBox.replaceChildren(...dots);

  document.querySelectorAll(".carousel-arrow").forEach((arrow) => {
    arrow.addEventListener("click", () => scrollToSlide(activeIndex + Number(arrow.dataset.dir || 1)));
  });

  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToSlide(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToSlide(activeIndex + 1);
    }
  });

  let scrollTicking = false;
  track.addEventListener(
    "scroll",
    () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollTicking = false;
        if (animationFrame) return;
        const index = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / slideStep())));
        markActive(index);
      });
    },
    { passive: true }
  );

  markActive(0);
}

if (stepList) {
  loaderButtons.forEach((button) => {
    button.addEventListener("click", () => loadSteps(button.dataset.loader));
  });
  window.addEventListener("resize", () => {
    moveLoaderThumb(document.querySelector(".loader-tabs button.active"));
  });
  if (document.fonts) {
    document.fonts.ready.then(() => moveLoaderThumb(document.querySelector(".loader-tabs button.active")));
  }
  setActiveLoader("melonloader");
  watchStepVisibility();
  loadSteps("melonloader");
}

openExternalLinksInNewTabs();
setupScreenshotCarousel();
setupScrollReveals();
