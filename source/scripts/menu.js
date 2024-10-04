const button = document.querySelector('.header__button');
const menu = document.querySelector('.header__nav');


const openMenu = () => {
  menu.classList.add('header__nav--active');
  button.classList.add('header__button--active');

  document.addEventListener('click', documentClickHandler);
};

const closeMenu = () => {
  menu.classList.remove('header__nav--active');
  button.classList.remove('header__button--active');

  document.removeEventListener('click', documentClickHandler);
};


function documentClickHandler(event) {
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    closeMenu();
  }
}

const buttonClickHandler = () => {
  if (menu.classList.contains('header__nav--active')) {
    closeMenu();
  } else {
    openMenu();
  }
};


button.addEventListener('click', buttonClickHandler);
