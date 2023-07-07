// Instruções do desafio :
//Some os digitos pares;
//Multiplique o resultado por 3;
//Some os números ímpares do número original e então some esse resultado com o anterior;
//Encontre o resto da divisão do resultado anterior por 10;
//Se o resto da divisão for 0, a digito verificador é 0, do contrário o digito verificador é 10 - resto.

function generateDigit(arr) {
  const step1 = arr.reduce((accum, current, index) => {
    return index === 0 || index % 2 === 0 ? accum + current : accum; // Verifica se o index é igual a 0 , ou então se o resto da divisão dele por 2 é igual a 0, caso seja, ele é um número é par. Portanto ele irá retornar o "accum" e somar com o "current". Caso ele não seja par, somaente iá retornar o acumulador.
  }, 0);

  const step2 = step1 * 3;

  const step3 =
    step2 +
    arr.reduce((accum, current, index) => {
      return index % 2 !== 0 ? accum + current : accum; // Se o resto da divisão por 2 é diferente de 0, com isso ele será um número ímpar. Soma o "acccum" com o "current" , mas se ele não for ímpar ele vai retornar somente o valor acumulado.
    }, 0);

  return step3 % 10 !== 0 ? 10 - (step3 % 10) : 0; // Se o resto da divisão por 10 do step3 for diferente de 0, vai retornar 10 - o módulo do step3.
}
function verifyCode(code) {
  const numberArray = code.toString().split("").map(Number); // Transforma em string, divide em um array de strings e depois transforma todos os elementos em números.

  const numberArraywithoutDigit = numberArray.slice(0, -1); // Elimina o digito verificador

  const correctDigit = generateDigit(numberArraywithoutDigit); // Digito Correto

  return correctDigit === numberArray[numberArray.length - 1];
}

console.log(verifyCode(547020743789)); //true
console.log(verifyCode(301354030348)); //true
console.log(verifyCode(301354030349)); //false
console.log(verifyCode(123456789872)); //false
