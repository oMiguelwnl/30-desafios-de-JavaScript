function insertIntoString(str, toInsert, indexes) {
  const charsArray = str.split(""); // Transforma em um Array.
  let insertCont = 0; // A cada vez que um caracter é inserido, ele vai adicionar 1 nesse contador.

  for (let i = 0; i <= str.length; i++) {
    // <= para que seja possível inserir um caracter na última posição.
    if (indexes.includes(i)) {
      //Verifica o Array inclui a posição atual. Caso inclua, será inserido naquela posição a string.
      charsArray.splice(i + insertCont, 0, toInsert);
      insertCont++;
    }
  }
  return charsArray.join(""); //Volta a ser uma string.
}
console.log(
  insertIntoString("capaz utilizar as cápsulas emergência", "de ", [6, 27, 38])
);
console.log(insertIntoString("Hello", "world", [6]));
console.log(insertIntoString("Isso é um teste", "não", []));
