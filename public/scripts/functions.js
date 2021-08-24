const createElement = (tag, className, parent, text) => {
  const ele = document.createElement(tag);
  parent.appendChild(ele);
  ele.classList.add(className);
  if (tag === 'img') {
    ele.src = text;
  } else {
    ele.textContent = text;
  }
  return ele;
};
