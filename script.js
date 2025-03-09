function toggleSection(element) {
    element.classList.toggle('active');
}

function toggleSubgroup(element) {
    element.classList.toggle('active');
}

// Кнопка "Наверх"
const scrollToTopButton = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function() {
    // Находим все элементы <audio> на странице
    const audioElements = document.querySelectorAll("audio");

    // Устанавливаем громкость на 50% для каждого аудио
    audioElements.forEach(audio => {
        audio.volume = 0.5; // 0.5 соответствует 50% громкости
    });
});
