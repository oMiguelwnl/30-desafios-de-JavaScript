let fibonacciCache = {}; // Armazena os resultados.

function fibonacci(num) {
  const big = BigInt(num);

  if (typeof fibonacciCache[big] === "bigint") {
    return fibonacciCache[big];
  }

  let result = 0n;

  if (big === 0n) {
    result = 0n;
  } else if (big === 1n) {
    result = 1n;
  } else if (big >= 2n) {
    //Retorna a funcao fibonacci anterior somada a anterior da anterior.
    result = fibonacci(big - 1n) + fibonacci(big - 2n);
  }
  fibonacciCache[big] = result;
  return result;
}
// //Cria um loop que vai de 1 ate 10000
// for (let i = 0; i < 10000; i++) {
//   console.log(i, fibonacci(i));
// }

console.log(fibonacci(0));
console.log(fibonacci(2n));
console.log(fibonacci(7));
console.log(fibonacci(144n));
