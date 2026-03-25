const revealItems = document.querySelectorAll(".reveal");
const timelineItems = document.querySelectorAll(".timeline-item");
const yearTarget = document.getElementById("year");
const hero = document.querySelector(".hero");
const panelShell = document.querySelector(".panel-shell");

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
  panelShell &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    panelShell.style.setProperty("--panel-shift-x", `${offsetX * 18}px`);
    panelShell.style.setProperty("--panel-shift-y", `${offsetY * 18}px`);
  });

  hero.addEventListener("pointerleave", () => {
    panelShell.style.setProperty("--panel-shift-x", "0px");
    panelShell.style.setProperty("--panel-shift-y", "0px");
  });
}
