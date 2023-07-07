// function invert(str) {
//   const wordsArray = str.split(" ");
//   const invertedWords = wordsArray.map((word) => {
//     const LowerCaseWords = word.toLowerCase();
//     return LowerCaseWords.split("").reverse().join("");
//   });
//   return invertedWords.join(" ");
// }
// console.log(invert("Lorem ipsum dolore sec avanti"));
// console.log(invert("Hello"));
// console.log(invert("May the force be with you"));
// console.log(invert("It s over nine thousand"));

//  Segunda Formafunction

function invertWord(word) {
  return word.split("").reverse().join("");
}

function invert(str) {
  const invertedWords = str.toLowerCase().split(" ").map(invertWord);
  return invertedWords.join(" ");
}

console.log(invert("Lorem ipsum dolore sec avanti"));
console.log(invert("Hello"));
console.log(invert("May the force be with you"));
console.log(invert("It s over nine thousand"));
