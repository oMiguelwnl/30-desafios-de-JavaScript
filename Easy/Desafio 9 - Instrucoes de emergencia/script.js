function compareCounts(count, index, array) {
  return index !== 0 ? count === array[index - 1] : true;
}

function checkBalance(str) {
  const charCount = {}; // Objeto que vai ser a contagem de caracteres e receberá as propriedades de acordo com as letras.

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i]; // charCount[str[i]] => Pega o valor que está na string nessa posição do indice. Verifica se essa propriedade (charCount) existe , se sim o charCont nessa posição é igaul a +1. Se é a primeira vez que essa propriedade aparece, ela vai receber o valor 1.
    charCount[currentLetter] = charCount[currentLetter]
      ? charCount[currentLetter] + 1
      : 1;
  }

  return Object.values(charCount).every(compareCounts);
  // .values() => Converte o objeto para uma Array e dentro desse array ele coloca todos os valores.
  //Retorna true ou false se essses valores forem todos iguais.
  // every() => Verifica se a posição anterior tem o mesmo valor das posições anteriores
}

console.log(checkBalance("This is true")); //true
console.log(checkBalance("ssd")); //false
console.log(checkBalance("Lorem ipsum")); //false
console.log(checkBalance("QQwweerrttyy")); //true
