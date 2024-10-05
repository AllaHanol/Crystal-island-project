let offset = 0; //зміщення від лівого краю
const gallery = document.querySelector('.gallery');

document
  .querySelector('.gallery-next-btn')
  .addEventListener('click', function () {
    offset += 270;
    if (offset > 1200) {
      offset = 0;
    }
    gallery.style.left = -offset + 'px';
  });
document
  .querySelector('.gallery-prev-btn')
  .addEventListener('click', function () {
    offset -= 270;
    if (offset < 0) {
      offset = 1200;
    }
    gallery.style.left = -offset + 'px';
  });
