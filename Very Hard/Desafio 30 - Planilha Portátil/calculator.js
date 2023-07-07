class Calculator {
  //Adição
  static sum(...numbers) {
    return numbers.reduce((accum, number) => accum + Number(number), 0);
  }

  //Subtração
  static substract(...numbers) {
    const first = Number(numbers[0]);
    return numbers
      .slice(1)
      .reduce((accum, number) => accum - Number(number), first);
  }

  // Multiplicação
  static muliply(...numbers) {
    return numbers.reduce((accum, number) => accum * number, 1);
  }

  //Divisão
  static divide(...numbers) {
    const first = Number(numbers[0]);
    return numbers
      .slice(1)
      .reduce((accum, number) => accum / Number(number), first);
  }
  //Valor Mínimo
  static minimum(...numbers) {
    const sorted = numbers.sort((a, b) => a - b); //  Organiza os números em ordem crescente.
    return sorted[0];
  }

  // Valor Máximo
  static maximum(...numbers) {
    const sorted = numbers.sort((a, b) => b - a); //Organiza os números em ordem decrescente.
    return sorted[0];
  }

  // Média
  static average(...numbers) {
    return (
      numbers.reduce((accum, number) => accum + number, 0) / numbers.length
    ); //Soma tudo e depois divide
  }
}
module.exports = Calculator;
console.log("SUM: " + Calculator.sum(10, 5));
console.log("SUB: " + Calculator.substract(10, 5));
console.log("MUL: " + Calculator.muliply(10, 5));
console.log("DIV: " + Calculator.divide(10, 5));
console.log("MIN: " + Calculator.minimum(10, 5));
console.log("MAX: " + Calculator.maximum(10, 5));
console.log("AVG: " + Calculator.average(10, 5));
