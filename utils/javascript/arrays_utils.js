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