// menu.js - Mobile menu functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.mainnav ul');
  const overlay = document.querySelector('.overlay');
  
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (overlay) {
      overlay.classList.toggle('active');
    }
    
    // Update aria-expanded attribute for accessibility
    const isExpanded = navMenu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  }
  
  // Toggle menu when clicking the hamburger button
  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  }
  
  // Close menu when clicking on a link
  const navItems = document.querySelectorAll('.mainnav ul a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      toggleMenu();
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        e.target !== menuToggle) {
      toggleMenu();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      if (menuToggle) menuToggle.classList.remove('active');
      if (navMenu) navMenu.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
  


  
  // Add checkbox validation for condition.html
  const acceptCheckbox = document.querySelector('.rules-agree input[type="checkbox"]');
  const acceptButton = document.querySelector('.accept-btn');
  
  if (acceptCheckbox && acceptButton) {
    acceptButton.addEventListener('click', function(e) {
      if (!acceptCheckbox.checked) {
        e.preventDefault();
        alert('Please read and accept the terms and conditions before proceeding.');
        acceptCheckbox.focus();
      }
    });
  }
});