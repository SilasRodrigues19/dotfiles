// `arr` is an array

/* Check if an array is empty */
const isEmpty = (arr) => Array.isArray(arr) && !arr.length;

/* ######################################################################################## */

/* Close an array */
const clone = (arr) => arr.slice(0);

// Or
const clone = (arr) => [...arr];

// Or
const clone = (arr) => Array.from(arr);

// Or
const clone = (arr) => arr.map((x) => x);

// Or
const clone = (arr) => JSON.parse(JSON.stringify(arr));

// Or
const clone = (arr) => arr.concat([]);

// Or
const clone = (arr) => structuredClone(arr);

/* ######################################################################################## */

/* Compare two arrays regardless of order */
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify([...new Set(a)].sort()) === JSON.stringify([...new Set(b)].sort());
// Examples
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, 3, 2]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false

/* ######################################################################################## */

/* Find the maximum/minimum item of an array */
const max = (arr) => Math.max(...arr);
const min = (arr) => Math.min(...arr);

/* ######################################################################################## */

/* Get the average of an array */
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

/* Get the sum of an array of numbers */
const sum = (arr) => arr.reduce((a, b) => a + b, 0);

/* ######################################################################################## */

/* Get the unique values of an array */
const unique = (arr) => [...new Set(arr)];

// Or
const unique = (arr) => arr.filter((el, i, array) => array.indexOf(el) === i);

// Or
const unique = (arr) => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);

/* ######################################################################################## */

/* Generate a random unique ID */
const uuid = (a) => a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
    
    
/* ######################################################################################## */

/* Reverse a string */
const reverse = (str) => str.split('').reverse().join('');

// Or
const reverse = (str) => [...str].reverse().join('');

// Or
const reverse = (str) => str.split('').reduce((rev, char) => `${char}${rev}`, '');

// Or
const reverse = (str) => str === '' ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`;

/* ######################################################################################## */

/* Checking if number is even */
const isEven = (n) => n % 2 === 0;

// Or
const isEven = (n) => (n & 1) === 0;

// Or
const isEven = (n) => !(n & 1);

// Or
const isEven = (n) => Number.isInteger(n / 2);

/* Checking if number is odd */
const isOdd = (n) => n % 2 !== 0;

// Or
const isOdd = (n) => !!(n & 1);

// Or
const isOdd = (n) => !Number.isInteger(n / 2);

/* ######################################################################################## */

/* Check if a string contains only letters */
const isAlpha = (str) => /^[A-Z]+$/i.test(str);

/* ######################################################################################## */

/* Check if a value is base64 encoded */
const isBase64 = (value) => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);

/* ######################################################################################## */

/* Check if a string contains only digits */
const isNumeric = (str) => !/[^0-9]/.test(str);
// Examples
