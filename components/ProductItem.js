import { addBookmark, removeBookmark } from '../services/localStorage.js';
import { createElement } from '../utils/helper.js';
import { Modal } from './Modal.js';

export function ProductItem(item, isBookmarked) {
  const itemContainer = createElement('div', 'item__container');
  const itemImgContainer = createElement('div', 'img__container');
  const itemImg = createElement('img', 'item__img', '', {
    src: item.brand_image_url || item.image_url,
  });
  const itemInfo = createElement('div', 'item__info');
  const itemPrice = createElement('span', 'justify-end', item.price ? item.price + '원' : '');
  const itemSubTitle = createElement('span', 'item__sub', item.sub_title);
  const itemDiscount = createElement(
    'span',
    'item__discount',
    item.discountPercentage ? item.discountPercentage + '%' : ''
  );
  const itemTitle = createElement(
    'span',
    'item__title',
    item.type === 'Trending' ? `#${item.title}` : item.title || item.brand_name
  );
  const star = createElement('i', `fa-solid fa-star`);
  if (isBookmarked) {
    star.classList.add('active');
  }

  star.addEventListener('click', () => {
    if (star.classList.contains('active')) {
      star.classList.remove('active');
      removeBookmark(item.id);
    } else {
      star.classList.add('active');
      addBookmark(item);
    }
  });

  itemImg.addEventListener('click', () => Modal(item, star.cloneNode()));

  itemImg.append(star);
  itemImgContainer.append(itemImg, star);
  itemInfo.append(itemTitle, itemDiscount);
  itemContainer.append(
    itemImgContainer,
    itemInfo,
    item.type === 'Exhibition' ? itemSubTitle : itemPrice
  );

  return itemContainer;
}
