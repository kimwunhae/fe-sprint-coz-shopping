import { Category } from '../components/Category.js';
import { ProductList } from '../components/ProductList.js';
import { SERVER_URL } from '../constants/index.js';
import { get } from '../services/api.js';
import { getAllBookmarkedItems } from '../services/localStorage.js';

export function BookmarkPage() {
  const main = document.querySelector('main');
  const bookmarks = getAllBookmarkedItems();

  get(`${SERVER_URL}/categories`).then((data) => {
    main.append(Category(data, bookmarks));
    main.append(ProductList(Object.values(bookmarks)));
  });
}
