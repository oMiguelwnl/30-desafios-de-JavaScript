function multiplicativePersistence(num) {
  if (num < 10) {
    return 0;
  }
  const digits = num.toString().split(""); // Converte o número em uma string e em um array.

  const product = digits.reduce((accum, current) => accum * current, 1);

  return 1 + multiplicativePersistence(product);
}
console.log(multiplicativePersistence(539)); //3
console.log(multiplicativePersistence(999)); //4
console.log(multiplicativePersistence(7)); //0
console.log(multiplicativePersistence(7169)); //5
