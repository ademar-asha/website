const services = document.querySelector('.services__list');

const servicesClickHandler = (event) => {
  const target = event.target;
  if (target.closest('.services__title-wrapper')) {
    const wrapper = target.closest('.services__item');
    const button = wrapper.querySelector('.services__button');
    const description = wrapper.querySelector('.services__description');

    button.classList.toggle('services__button--active');
    description.classList.toggle('services__description--active');
  }
};

services.addEventListener('click', servicesClickHandler);
