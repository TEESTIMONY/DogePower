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


// Show Popup on Page Load
window.onload = function () {
    setTimeout(() => {
        document.getElementById('launchPopup').classList.add('show');
    }, 1000); // 1-second delay
};

// Close Popup
function closePopup() {
    document.getElementById('launchPopup').classList.remove('show');
}

