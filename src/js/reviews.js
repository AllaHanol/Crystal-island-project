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
