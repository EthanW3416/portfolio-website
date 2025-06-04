document.addEventListener("DOMContentLoaded", () => {
const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
      observer.unobserve(bar); // Only animate once
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the bar is visible
});

progressBars.forEach(bar => {
  observer.observe(bar);
});
});