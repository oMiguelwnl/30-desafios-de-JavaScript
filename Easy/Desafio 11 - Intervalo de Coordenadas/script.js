function smallPairs(pair) {
  const result = []; // O Resultado vai estar em formato de Array.

  for (let i = 0; i <= pair[0]; i++) {
    // Vai rodar por toda o pair e escolher aqueles onde o par é = ou + que 0
    for (let j = 0; j <= pair[1]; j++) {
      result.push([i, j]);
    }
  }
  return result;
}

console.log(smallPairs([2, 2]));
console.log(smallPairs([2, 7]));
console.log(smallPairs([-3, -3]));
console.log(smallPairs([7, 6]));
