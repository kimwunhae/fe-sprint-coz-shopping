import { renderPage } from '../index.js';
import { createElement, removeAllChildren } from '../utils/helper.js';

export function Header(routes) {
  const main = document.querySelector('main');

  document.querySelector('.menu').addEventListener('click', () => {
    if (document.querySelector('.tooltip')) {
      document.querySelector('.tooltip').remove();
    } else {
      const tooltip = createElement('ul', 'tooltip');
      Object.keys(routes).map((route) => {
        const listItem = createElement('li', 'tooltip__item', routes[route].title);

        listItem.addEventListener('click', () => {
          if (main.hasChildNodes()) {
            removeAllChildren(main);
          }
          window.history.pushState({}, 'hello', route);
          renderPage(routes[route].component);
        });

        tooltip.append(listItem);
      });

      document.querySelector('.menu').append(tooltip);
    }
  });
}
