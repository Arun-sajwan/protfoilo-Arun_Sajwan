const container = document.querySelector('.container');
const toggleIcons = document.querySelectorAll('.toggle-icon');
const icon = document.querySelector('.toggle-icon i');

// Initialize theme
let isDark = false;

toggleIcons.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Prevent multiple clicks
        toggle.classList.add('disabled');
        setTimeout(() => {
            toggle.classList.remove('disabled');
        }, 1500);

        // Toggle icon
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');

        // Toggle theme
        isDark = !isDark;
        container.style.background = isDark ? '#15202b' : '#f0f3fd';
        container.style.color = isDark ? '#f0f3fd' : '#333';

        // Update other elements
        const logo = document.querySelector('.logo');
        const navLinks = document.querySelectorAll('.navbar a');
        const socialLinks = document.querySelectorAll('.social-media a');
        const paragraph = document.querySelector('.home-content p');

        logo.style.color = isDark ? '#f0f3fd' : '#333';
        navLinks.forEach(link => {
            link.style.color = isDark ? '#f0f3fd' : '#333';
        });
        paragraph.style.color = isDark ? '#ccc' : '#555';

        // Update image
        const homeImg = document.querySelector('.home-img img');
        homeImg.src = isDark ? 'portfolio-icon.png' : 'portfolio-icon.png';
    });
});
