import { Header } from './components/Header.js';
import { MainPage } from './pages/MainPage.js';
import { ProductPage } from './pages/ProductPage.js';
import { removeAllChildren } from './utils/helper.js';

const routes = {
  '/': {
    component: MainPage,
    title: '김은혜님, 안녕하세요!',
  },
  '/bookmarks': { component: ProductPage, title: '북마크 페이지' },
  '/products': { component: ProductPage, title: '상품리스트 페이지' },
};

export function renderPage(component) {
  const main = document.querySelector('main');

  if (main.hasChildNodes) {
    removeAllChildren(main);
  }

  const page = component();
  page.then((children) => main.append(children));
}

function init() {
  window.addEventListener('load', () => renderPage(routes['/'].component));
  window.addEventListener('popstate', () => renderPage(routes[window.location.pathname].component));

  Header(routes);
}

init();
