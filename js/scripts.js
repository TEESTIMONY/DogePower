// Select Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinksMobile = document.querySelector('.nav-links-mobile');

// Add Event Listener for Toggling the Menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinksMobile.classList.toggle('active');
});

function copyContract() {
    const contractAddress = document.getElementById('contract-address').textContent;
    navigator.clipboard.writeText(contractAddress).then(() => {
        alert('Contract address copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


window.onload = function () {
    const popup = document.getElementById("pinksale-popup");
    popup.classList.add("active");
};

// Close the popup
function closePopup() {
    const popup = document.getElementById("pinksale-popup");
    popup.classList.remove("active");
}
