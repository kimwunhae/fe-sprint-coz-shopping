export function createElement(tag, classList, text, attributes) {
  const element = document.createElement(tag);

  if (classList) {
    classList.split(' ').forEach((className) => element.classList.add(className));
  }

  if (text) {
    element.textContent = text;
  }

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  return element;
}

export function removeAllChildren(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}
