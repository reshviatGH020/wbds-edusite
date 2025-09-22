// Slider for About Section
document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".about-description");
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
  });


// Right Slider for Why Choose us Section
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-right");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.3 } // triggers when 30% of the element is visible
  );

  elements.forEach(el => observer.observe(el));
});


// Left Slider for Why Choose us Section
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-left");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.3 } // triggers when 30% of the element is visible
  );

  elements.forEach(el => observer.observe(el));
});