const BOOKMARKS_KEY = 'bookmarkedItems';

/**
 * 모든 북마크된 아이템을 가져옵니다.
 */
export function getAllBookmarkedItems() {
  const bookmarks = localStorage.getItem(BOOKMARKS_KEY);
  if (bookmarks) {
    return JSON.parse(bookmarks);
  }
  return {};
}

/**
 * 아이템을 북마크에 추가합니다.
 * @param {Object} item - 북마크에 추가할 아이템 객체
 */
export function addBookmark(item) {
  const bookmarks = getAllBookmarkedItems();
  bookmarks[item.id] = item;
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
}

/**
 * 북마크에서 아이템을 제거합니다.
 * @param {string} itemId - 제거할 아이템의 ID
 */
export function removeBookmark(itemId) {
  const bookmarks = getAllBookmarkedItems();
  if (bookmarks[itemId]) {
    delete bookmarks[itemId];
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
}

/**
 * 특정 아이템이 북마크에 있는지 확인합니다.
 * @param {string} itemId - 확인할 아이템의 ID
 */
export function isBookmarked(itemId) {
  const bookmarks = getAllBookmarkedItems();
  return !!bookmarks[itemId];
}
