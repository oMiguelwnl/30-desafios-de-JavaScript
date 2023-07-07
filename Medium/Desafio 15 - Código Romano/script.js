function sumValues(accum, current, index, array) {
  return current < array[index + 1] ? accum - current : accum + current;
}

function romanNumeral(str) {
  const numeralsArray = str.split(""); // Array de caracteres.

  const romanDecimalMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const decimalsArray = numeralsArray.map(
    (numeral) => romanDecimalMap[numeral]
  );

  return decimalsArray.reduceRight(sumValues);
}

console.log(romanNumeral("XLVII")); // Saída: 47
console.log(romanNumeral("CDXXXCIII")); // Saída: 438
console.log(romanNumeral("CMIX")); // Saída: 309
console.log(romanNumeral("MMMCMCIX")); // Saída: 3999
