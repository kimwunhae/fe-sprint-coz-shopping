import { createElement } from '../utils/helper.js';
import { ProductList } from './ProductList.js';

export function Section(title, list) {
  const sectionEl = createElement('section');
  const titleEl = createElement('h1', 'section__title', title);
  const productsEl = ProductList(list);

  sectionEl.append(titleEl, productsEl);

  return sectionEl;
}
