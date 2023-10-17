import { Section } from '../components/Section.js';
import { SERVER_URL } from '../constants/index.js';
import { get } from '../services/api.js';
import { getAllBookmarkedItems } from '../services/localStorage.js';

export function MainPage() {
  const mainContainer = document.createElement('div');
  const bookmarks = getAllBookmarkedItems();

  return get(`${SERVER_URL}/products`, { limit: 8 }).then((data) => {
    const productsEl = Section('상품 리스트', data.items);
    const bookmarksEl = Section('북마크 리스트', Object.values(bookmarks));
    mainContainer.append(productsEl, bookmarksEl);
    return mainContainer;
  });
}
