// Get the button
const scrollBtn = document.getElementById('scrollTopBtn');

// Show button when page is scrolled
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to top when clicked
scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Add click animation
    this.classList.add('clicked');

    // Remove animation class after it completes
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 400);

    // Smooth scroll to top (navbar)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});