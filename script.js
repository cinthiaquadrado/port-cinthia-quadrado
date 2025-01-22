document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const observerOptions = {
    root: null,
    threshold: 0.3
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
