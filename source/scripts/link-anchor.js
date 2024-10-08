const links = document.querySelectorAll('a[href^="#"]');

const linkClickHandler = (event) => {
  event.preventDefault();

  const link = event.target.closest('a');
  const href = link.getAttribute('href');


  if (href && href !== '#') {
    const targetId = href.substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView();
    }
  } else {
    window.scrollTo({top: 0});
  }
};

links.forEach((link) => {
  link.addEventListener('click', linkClickHandler);
});
