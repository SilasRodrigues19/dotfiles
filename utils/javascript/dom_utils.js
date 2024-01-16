// Helper for querySelector / querySelectorAll
const selectElement = (el, isAll = false) => {
  if (typeof el === 'string') {
    return isAll ? document.querySelectorAll(el) : document.querySelector(el);
  }

  return el;
};

// Helper for createElement
const createElement = el => document.createElement(el);


// Helper for appendChild
const appendChild = (parent, child) => parent.append(child);


// Helper for classList
const hasClass = (el, className) => el.classList.contains(className);

// Helper for classList
const toggleClass = (el, className) => el.classList.toggle(className);

// Helper for classList
const removeClass = (element, className) => element.classList.remove(className);

// Helper for getAttribute
const getAttribute = (el, attribute) => el.getAttribute(attribute);

// Helper setAttribute
const setAttribute = (el, attribute, value) => el.setAttribute(attribute, value);

// Helper for removeAttribute
const removeAttribute = (el, attribute) => el.removeAttribute(attribute);

// Helper for handle with CSS styles
const applyStyles = (element, styles) => {
    for (let property in styles) element.style[property] = styles[property];
}

// Usage
var myElement = document.querySelector('#myElementId');
applyStyles(myElement, {
    background: '#1e1e1e',
    color: '#cacaca',
    fontSize: '1rem',
    borderRadius: '2rem'
});
