document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the section-animate class
    const animatedSections = document.querySelectorAll('.section-animate');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        animatedSections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('section-visible');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});