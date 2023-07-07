function possiblePasswords(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  const removedChar = arr[0];
  const partialChars = arr.slice(1);

  const partialPossibilities = possiblePasswords(partialChars); // Correção: Chamar a função recursivamente.

  const allPossibilities = [];

  partialPossibilities.forEach((partialPossibility) => {
    // Correção: Remover ".array"
    for (let i = 0; i <= partialPossibility.length; i++) {
      const completePossibility = [
        ...partialPossibility.slice(0, i),
        removedChar,
        ...partialPossibility.slice(i),
      ];
      allPossibilities.push(completePossibility); // Correção: Mover o push para fora do array.
    }
  });
  return allPossibilities;
}
console.log(possiblePasswords(["X", "s", "-", "#"]));
console.log(possiblePasswords(["1", "2", "3"]));
console.log(possiblePasswords([]));
console.log(possiblePasswords(["a", "7", "c", "4", "@"]));
