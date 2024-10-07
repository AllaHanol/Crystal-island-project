'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default (() => {
  const swiper = new Swiper('.gallery-slider', {
    slidesPerView: 'auto',
    spaceBetween: 24,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
