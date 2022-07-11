/* Reverse a string */
const reverse = (str) => str.split('').reverse().join('');

// Or
const reverse = (str) => [...str].reverse().join('');

// Or
const reverse = (str) =>
  str.split('').reduce((rev, char) => `${char}${rev}`, '');

// Or
const reverse = (str) =>
  str === '' ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`;

/* ######################################################################################## */

/* Check if a string contains only letters */
const isAlpha = (str) => /^[A-Z]+$/i.test(str);

/* ######################################################################################## */

/* Check if a value is base64 encoded */
const isBase64 = (value) => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);

/* ######################################################################################## */

/* Check if a string contains only digits */
const isNumeric = (str) => !/[^0-9]/.test(str);