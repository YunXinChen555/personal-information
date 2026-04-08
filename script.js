const revealItems = document.querySelectorAll(".reveal");
const timelineItems = document.querySelectorAll(".timeline-item");
const yearTarget = document.getElementById("year");
const hero = document.querySelector(".hero");
const heroCard = document.querySelector(".hero-card");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxTriggers = document.querySelectorAll("[data-lightbox]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-active", entry.isIntersecting);
    });
  },
  {
    threshold: 0.55,
  }
);

timelineItems.forEach((item) => timelineObserver.observe(item));

const toggleHeaderState = () => {
  document.body.classList.toggle("is-scrolled", window.scrollY > 24);
};

toggleHeaderState();
window.addEventListener("scroll", toggleHeaderState, { passive: true });

if (
  hero &&
  heroCard &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    heroCard.style.setProperty("--panel-shift-x", `${offsetX * 16}px`);
    heroCard.style.setProperty("--panel-shift-y", `${offsetY * 16}px`);
  });

  hero.addEventListener("pointerleave", () => {
    heroCard.style.setProperty("--panel-shift-x", "0px");
    heroCard.style.setProperty("--panel-shift-y", "0px");
  });
}

const closeLightbox = () => {
  if (!lightbox) {
    return;
  }

  lightbox.hidden = true;
  document.body.classList.remove("has-lightbox-open");
  if (lightboxImage) {
    lightboxImage.src = "";
    lightboxImage.alt = "";
  }
  if (lightboxCaption) {
    lightboxCaption.textContent = "";
  }
};

const openLightbox = (trigger) => {
  if (!lightbox || !lightboxImage || !lightboxCaption) {
    return;
  }

  const image = trigger.querySelector("img");
  const href = trigger.getAttribute("href");
  const caption = trigger.dataset.caption || "";
  const alt = image ? image.alt : caption;

  if (!href) {
    return;
  }

  lightboxImage.src = href;
  lightboxImage.alt = alt;
  lightboxCaption.textContent = caption;
  lightbox.hidden = false;
  document.body.classList.add("has-lightbox-open");
};

lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    if (!lightbox) {
      return;
    }

    event.preventDefault();
    openLightbox(trigger);
  });
});

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
