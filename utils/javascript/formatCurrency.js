const BRL = 'R$',
  USD = 'U$',
  EUR = '€$';

const handleCurrency = (value, currentSymbol) => {
  let parsedValue = isNaN(value) ? 0 : parseFloat(value);
  return `${currentSymbol} ${parsedValue.toFixed(2)}`;
};

console.log(handleCurrency(100, BRL));
console.log(handleCurrency(100, USD));
console.log(handleCurrency(100, EUR));
