function decipher(str, key) {
  const charsArray = str.split(""); // Transfoma em um Array
  const normalizedKey = key % 26; // Normaliza o valor de key para um intervalo entre 0 e 25. ou seja se a menssagem tem 60 caracteres , ele vai  ter que dar mais 2 voltas.

  const codesArray = charsArray.map((char) => {
    const currentCode = char.charCodeAt(0);

    if (
      currentCode >= 65 &&
      currentCode <= 90 &&
      currentCode - normalizedKey < 65
    ) {
      return currentCode + 26; // Verifica se o caractere atual é uma letra maiúscula e se a subtração do valor normalizado não ultrapassa o limite inferior do intervalo de caracteres maiúsculos. Caso isso ocorra, adiciona-se 26 ao código para ajustar o deslocamento corretamente dentro do intervalo de caracteres maiúsculos.
    }
    if (
      // verifica se o caractere atual é uma letra minúscula e se a subtração do valor normalizado não ultrapassa o limite inferior do intervalo de caracteres minúsculos. Caso isso ocorra, adiciona-se 26 ao código para ajustar o deslocamento corretamente dentro do intervalo de caracteres minúsculos.
      currentCode >= 96 &&
      currentCode <= 122 &&
      currentCode - normalizedKey < 96
    ) {
      return currentCode + 26;
    }
    return currentCode;
  });
  return codesArray
    .map((code) => String.fromCharCode(code - normalizedKey))
    .join("");
}
console.log(decipher("Vguvg", 2));
console.log(decipher("BCDYZAbcdyza", 27));
console.log(decipher("Qaiik", 60));
console.log(decipher("Amozmlw", 8));
