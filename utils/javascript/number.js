/* Generate a random unique ID */
const uuid = (a) =>
  a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);

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