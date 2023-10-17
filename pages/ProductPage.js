import { Category } from '../components/Category.js';
import { ProductList } from '../components/ProductList.js';
import { SERVER_URL } from '../constants/index.js';
import { get } from '../services/api.js';
import { getAllBookmarkedItems } from '../services/localStorage.js';

export function ProductPage() {
  const bookmarks = getAllBookmarkedItems();
  const productContainer = document.createElement('div');
  const queries = { limit: 12 };

  return get(`${SERVER_URL}/categories`).then((data) => {
    const all = {
      title: '전체',
      image_url:
        'https://www.coolztricks.com/wp-content/uploads/2022/07/photo_2022-07-18-23.06.02.jpeg',
    };
    const categories = [all, ...data];

    productContainer.append(Category(categories, bookmarks));

    if (window.location.pathname === '/bookmarks') {
      productContainer.append(ProductList(Object.values(bookmarks)));
      return productContainer;
    }

    return get(`${SERVER_URL}/products`, queries).then((data) => {
      productContainer.append(ProductList(data.items));
      return productContainer;
    });
  });
}
