// let offset = 0; //зміщення від лівого краю
// const gallery = document.querySelector('.gallery');

// document
//   .querySelector('.gallery-next-btn')
//   .addEventListener('click', function () {
//     offset += 270;
//     if (offset > 1200) {
//       offset = 0;
//     }
//     gallery.style.left = -offset + 'px';
//   });
// document
//   .querySelector('.gallery-prev-btn')
//   .addEventListener('click', function () {
//     offset -= 270;
//     if (offset < 0) {
//       offset = 1200;
//     }
//     gallery.style.left = -offset + 'px';
//   });

// import Swiper from 'swiper/bundle';
// import 'swiper/scss';

// document.addEventListener('DOMContentLoaded', () => {
//   const width = window.innerWidth;
//   let slidesPerView;
//   if (width > 320 && width < 1440) {
//     slidesPerView = 2;
//   } else {
//     slidesPerView = 1;
//   }
//   new Swiper('.swiper-reviews', {
//     slidesPerView,
//     spaceBetween: 0,
//     slideToClickedSlide: true,
//     loop: true,
//     loopedSlides: 1,
//     keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//     },
//   });
// });

'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default (() => {
  const swiper = new Swiper('.gallery-container', {
    slidesPerView: 'auto',
    spaceBetween: 24,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    pagination: {
      type: 'bullets',
      el: '.gallery-controls',
      clickable: true,
    },
  });
})();
