import { addBookmark, removeBookmark } from '../services/localStorage.js';
import { createElement } from '../utils/helper.js';

export function Modal(item, star) {
  console.log(star);
  const modalContainer = createElement('div', 'modal__container');
  const button = createElement('i', 'fa-solid fa-x');
  const wrapper = createElement('div');

  const title = createElement(
    'span',
    'modal__title',
    item.type === 'Trending' ? `#${item.title}` : item.title || item.brand_name
  );
  const modal = createElement('div', 'modal');
  const modalImg = createElement('img', 'modal__img', '', {
    src: item.image_url || item.brand_image_url,
  });

  button.addEventListener('click', () => {
    modalContainer.remove();
  });

  star.addEventListener('click', () => {
    if (star.classList.contains('active')) {
      star.classList.remove('active');
      removeBookmark(item.id);
    } else {
      star.classList.add('active');
      addBookmark(item);
    }
  });

  wrapper.append(star, title);
  modal.append(modalImg, button, wrapper);
  modalContainer.append(modal);
  document.body.append(modalContainer);
}
