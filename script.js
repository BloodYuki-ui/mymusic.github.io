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