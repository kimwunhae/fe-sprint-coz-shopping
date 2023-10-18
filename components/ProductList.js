import { getAllBookmarkedItems } from '../services/localStorage.js';
import { createElement } from '../utils/helper.js';
import { ProductItem } from './ProductItem.js';

export function ProductList(list) {
  const listContainer = createElement('div', 'list__container');

  if (!list.length) {
    const notFoundMessage = createElement('h1', 'alert__message', '해당하는 상품이 없습니다. 🥲');
    return notFoundMessage;
  } else {
    const bookmarks = getAllBookmarkedItems();
    list.forEach((item) => {
      const isBookmarked = !!bookmarks[item.id];
      const itemContainer = ProductItem(item, isBookmarked);
      listContainer.append(itemContainer);
    });
  }
  return listContainer;
}
