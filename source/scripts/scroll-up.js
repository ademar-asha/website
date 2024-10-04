const scrollToTopBtn = document.querySelector('.scroll-up');

// Функция для отображения/скрытия кнопки
function toggleScrollToTopBtn() {
  if (window.scrollY > window.innerHeight * 1.5) {
    scrollToTopBtn.classList.add('scroll-up--show');
  } else {
    scrollToTopBtn.classList.remove('scroll-up--show');
  }
}

// Функция для плавного прокручивания вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

// События прокрутки
window.addEventListener('scroll', toggleScrollToTopBtn);
scrollToTopBtn.addEventListener('click', scrollToTop);
