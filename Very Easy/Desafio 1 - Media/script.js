// function media(numbers) {
//   let soma = 0;

//   numbers.forEach((number) => {
//     soma += number; // sum = sum + number
//   });

//   const media = soma / numbers.length;
//   return media;
// }

///// Reduzida

function media(...numbers) {
  const soma = numbers.reduce((accum, num) => accum + num, 0);
  return soma / numbers.length;
}

console.log(media(10, 9, 6, 8, 9, 1, 5, 7)); // 6.875
console.log(media(2, 5, 7, 1, -2)); // 2.6
console.log(media(10, 10, 10, 10, 9)); // 9.8
console.log(media(25, 75)); // 50
