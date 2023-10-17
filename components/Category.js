import { createElement } from '../utils/helper.js';
import { SERVER_URL } from '../constants/index.js';
import { get } from '../services/api.js';
import { ProductList } from './ProductList.js';

export function Category(categories, bookmarks) {
  const nav = createElement('nav');
  const ul = createElement('ul');
  const main = document.querySelector('main');

  nav.append(ul);

  function switchCategory(categoryId) {
    document.querySelector('.list__container').remove();

    if (window.location.pathname === '/bookmarks') {
      const filtered = Object.values(bookmarks).filter((item) => {
        if (categoryId === undefined) {
          return true;
        }
        return item.category.id === categoryId;
      });
      main.append(ProductList(filtered));
    } else {
      const queries = {
        limit: 12,
      };
      if (categoryId !== undefined) {
        queries.category = categoryId;
      }

      get(`${SERVER_URL}/products`, queries).then((data) => {
        main.append(ProductList(data.items));
      });
    }
  }

  categories.map((category) => {
    const categoryLi = createElement('li');
    const categoryImg = createElement('img', 'category__img', '', { src: category.image_url });
    const categoryTitle = createElement('span', 'category__title', category.title);

    categoryLi.addEventListener('click', () => switchCategory(category.id));

    categoryLi.append(categoryImg, categoryTitle);
    ul.append(categoryLi);
  });

  return nav;
}
