function quotation(fullName) {
  const names = fullName.split(" "); // Separa cada nome e deixa um espaço entre eles.
  let initials = ""; // Cria um array sem nada dentro.

  for (let i = 0; i < names.length - 1; i++) {
    // Faz um for loop, que roda por todos os arrays e adiciona a primeira letra dos nomes em "initials"
    initials += ` ${names[i][0].toUpperCase()}.`; // Roda por todo o names, seleciona a primeira letra e a coloca em upperCase.
  }
  return `${names[names.length - 1].toUpperCase()},${initials}`; // Pega o nome que está na ultima posição ( names[names.length-1])
}
console.log(quotation("Isaac Arrubia Ferreira Pontes"));
console.log(quotation("John Ronald Reul Tolkien"));
console.log(quotation("Christopher James Paolini"));
console.log(quotation("Suzanne Marie Collins"));
