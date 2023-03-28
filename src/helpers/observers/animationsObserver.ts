// An observer that smoothly shows hidden elements when they come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");

      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(".reveal");

hiddenElements.forEach((el) => observer.observe(el));

export {};
