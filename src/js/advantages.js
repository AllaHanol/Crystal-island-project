'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default (() => {
  const swiper = new Swiper('.adv-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
