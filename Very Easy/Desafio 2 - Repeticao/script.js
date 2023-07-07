function chunks(number) {
  if (number === 0) {
    return "";
  }
  if (number === 1) {
    return "chunk";
  } else {
    return "chunk-" + chunks(number - 1);
  }
}

console.log(chunks(4));
console.log(chunks(1));
console.log(chunks(8));
console.log(chunks(2));
