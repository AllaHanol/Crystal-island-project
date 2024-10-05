'use strict';

export default (() => {
  const openBtn = document.querySelector('.header-menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const modalMenu = document.querySelector('.backdrop');

  if (!openBtn || !closeBtn || !modalMenu) {
    console.warn('Missing DOM elements');
    return;
  }

  const preventTouch = e => {
    if (!modalMenu.contains(e.target)) {
      e.preventDefault();
    }
  };

  const addBodyScrollPrevention = () => {
    document.body.classList.add('scroll-lock');
    document.body.addEventListener('touchmove', preventTouch, {
      passive: false,
    });
  };

  const removeBodyScrollPrevention = () => {
    document.body.classList.remove('scroll-lock');
    document.body.removeEventListener('touchmove', preventTouch);
  };

  const toggleMenu = () => {
    const isOpen = openBtn.getAttribute('aria-expanded') === 'true';
    openBtn.setAttribute('aria-expanded', !isOpen);
    modalMenu.classList.toggle('is-open');

    document.body.style.overflow = isOpen ? '' : 'hidden';
    modalMenu.style.overflow = 'auto';

    if (!isOpen) {
      addBodyScrollPrevention();
    } else {
      removeBodyScrollPrevention();
    }

    const menuAnchors = document.querySelectorAll('a.modal-nav-link');
    menuAnchors.forEach(anchor => {
      if (!isOpen) {
        anchor.addEventListener('click', toggleMenu);
      } else {
        anchor.removeEventListener('click', toggleMenu);
      }
    });
  };

  openBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  const mediaQuery = window.matchMedia('(max-width: 1199px)');
  const mediaQueryHandler = e => {
    if (!e.matches && modalMenu.classList.contains('is-open')) {
      toggleMenu();
    }
  };
  mediaQuery.addEventListener('change', mediaQueryHandler);

  if (modalMenu.classList.contains('is-open')) {
    addBodyScrollPrevention();
  } else {
    removeBodyScrollPrevention();
  }
})();
