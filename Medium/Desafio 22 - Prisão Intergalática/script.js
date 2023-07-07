function missingPrisoners(arr) {
  const sorted = arr.slice(0).sort((a, b) => a - b); // Ordena do menor ao maior todos os números a fim de descobrir qual é o último número da lista.
  const total = Number(sorted[sorted.length - 1]); // Mostra o número total de prisioneiros.

  const allPrisioners = [];

  for (let i = 0; i < total; i++) {
    const prisioner = i + 1; // Número de prisioneiros.
    allPrisioners.push(prisioner.toString().padStart(4, "0")); //Formata o número do prisioneiro com 4 dígitos, adicionando zeros à esquerda, se necessário, e adicionando-o ao array allPrisioners.
  }

  const missingPrisoners = []; // Correção: Cria um novo array para armazenar os prisioneiros ausentes.

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
