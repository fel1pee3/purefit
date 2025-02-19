const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const navLinksList = document.querySelectorAll('.nav-links a');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    closeBtn.style.display = 'block'; // Mostra o botão ao abrir o menu
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeBtn.style.display = 'none'; // Esconde o botão ao fechar o menu
});

navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        closeBtn.style.display = 'none'; // Esconde o botão ao clicar em um link
    });
});
