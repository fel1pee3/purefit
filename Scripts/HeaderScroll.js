document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Ajuste o valor conforme necessário
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});