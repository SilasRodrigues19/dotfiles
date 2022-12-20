// Helper for querySelector / querySelectorAll
const select = (el, isAll = false) => {
  if (typeof el === 'string') {
    return isAll ? document.querySelectorAll(el) : document.querySelector(el);
  }

  return element;
};

// Helper for createElement
const create = el => document.createElement(el);


// Helper for appendChild
const append = (parent, child) => {
  return parent.append(child);
}