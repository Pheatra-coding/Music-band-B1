function toggleMenu() {
    const navbar = document.querySelector('.navbar ');
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}