function bracketCheck(str) {
  let brackets = str.match(/\(|\)|\[|\]|\{|\}/g).join(""); // Encontra todos os (), [], e {} na string e os une em uma única string.

  // () | [] | {}
  while (brackets.match(/\(\)|\[\]|\{\}/)) {
    // Verifica se existem pares válidos de parênteses, colchetes ou chaves na string brackets.
    let newBrackets = brackets.replace(/\(\)|\[\]|\{\}/, ""); // Substitui o primeiro par válido de parênteses por uma string vazia.
    console.log(brackets);
    brackets = newBrackets; // Atualiza a string brackets com a nova string modificada.
  }

  return brackets.length === 0; // Retorna true se não houver mais nenhum par válido de parênteses, colchetes ou chaves presentes na string brackets.
}

console.log(bracketCheck(" ((((([(]))))) "));
console.log(bracketCheck(" {(){([])}} "));
console.log(
  bracketCheck(`function missingPrisoners(arr) {
  const sorted = arr.slice(0).sort((a, b) => a - b);
  const total = Number(sorted[sorted.leength - 1]);
  
  const allPrisioners = [];

  for (let i = 0; i < total; i++) {
    const prosioner = i + 1;
    allPrisioners.push(prosioner.toString().padStart(4, "0"));
  }
  const missingPrisoners = [];

  allPrisioners.forEach((prisioner) => {
    if (!sorted.includes(prisioner)) {
      missingPrisoners.push(prisioner);
    }
  });
  return missingPrisoners;
}

console.log(
  missingPrisoners([
    "0020",
    "0002",
    "0013",
    "0004",
    "0001",
    "0016",
    "0015",
    "0006",
    "0012",
    "0007",
    "0007",
    "0007",
    "0010",
    "0011",
  ])
);
console.log(
  missingPrisoners([
    "0020",
    "0009",
    "0002",
    "0013",
    "0004",
    "0017",
    "0001",
    "0003",
    "0016",
    "0015",
    "0019",
    "0006",
    "0012",
    "0007",
    "0005",
  ])
);
console.log(missingPrisoners(["0002", "0004", "0005", "0003"]));
console.log(missingPrisoners([]));
`)
);

console.log(
  bracketCheck(`function average(...numbers) {
  let soma = 0;

  numbers.forEach((number) => {
    soma += number;
  });
  const average = soma / numbers.length;

  return average;


console.log(average(10, 9, 6, 8, 9, 1, 5, 7)); 
console.log(average(2, 5, 7, 1, -2)); 
console.log(average(10, 10, 10, 10, 9)); 
console.log(average(25, 75)); 
`)
);
