const carousel = document.querySelector('.carousel2');
const comments = document.querySelectorAll('.comment');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');

let currentIndex = 0;
const totalComments = comments.length;

function updateCarousel() {
    const screenWidth = window.innerWidth;
    const commentsToShow = screenWidth < 750 ? 1 : 2;
    const maxIndex = totalComments - commentsToShow;
    
    if (currentIndex > maxIndex) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    // Atualizar a transformação para mostrar os comentários corretos
    const offset = -currentIndex * (100 / commentsToShow);
    carousel.style.transform = `translateX(${offset}%)`;

    // Atualizar o contador para refletir a posição atual
    counter.textContent = `${currentIndex + 1}/${totalComments}`;
}

prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// Inicializar o carrossel
updateCarousel();
