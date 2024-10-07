let offset = 0; //зміщення від лівого краю
const reviewsSlider = document.querySelector('.reviews-slider');

document
  .querySelector('.reviews-next-btn')
  .addEventListener('click', function () {
    offset += 270;
    if (offset > 1200) {
      offset = 0;
    }
    reviewsSlider.style.left = -offset + 'px';
  });
document
  .querySelector('.reviews-prev-btn')
  .addEventListener('click', function () {
    offset -= 270;
    if (offset < 0) {
      offset = 1200;
    }
    reviewsSlider.style.left = -offset + 'px';
  });

import Swiper from 'swiper/bundle';
import 'swiper/scss';

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  let slidesPerView;
  if (width > 320 && width < 1440) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1;
  }
  new Swiper('.swiper-reviews', {
    slidesPerView,
    spaceBetween: 0,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
