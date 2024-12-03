// Select Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinksMobile = document.querySelector('.nav-links-mobile');

// Add Event Listener for Toggling the Menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinksMobile.classList.toggle('active');
});
