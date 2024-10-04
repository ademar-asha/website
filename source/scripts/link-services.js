const heroList = document.querySelector('.hero__list');
const projectsList = document.querySelector('.projects__list');
const services = document.querySelector('.services');


const showDescription = (service) => {
  const serviceDescription = service.querySelector('.services__description');
  const isDescriptionVisible = serviceDescription.classList.contains('services__description--active');

  if (!isDescriptionVisible) {
    const button = service.querySelector('.services__button');

    setTimeout(() => {
      serviceDescription.classList.add('services__description--active');
      button.classList.add('services__button--active');
    }, 700);
  }
};

const serviceLinkHandler = (event) => {
  const serviceLink = event.target.closest('[data-link]');

  if (serviceLink) {
    const serviceName = serviceLink.dataset.link;
    const isService = services.querySelectorAll(`[data-name="${serviceName}"]`).length;

    if (isService) {
      const offset = 20;
      const service = services.querySelector(`[data-name="${serviceName}"]`);

      const servicePosition = service.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + servicePosition - offset;

      window.scrollTo({ top: offsetPosition });
      showDescription(service);
    } else {
      services.scrollIntoView();
    }
  }
};


heroList.addEventListener('click', serviceLinkHandler);
projectsList.addEventListener('click', serviceLinkHandler);
