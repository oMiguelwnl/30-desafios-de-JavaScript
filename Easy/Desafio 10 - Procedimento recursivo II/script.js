function factorial(num) {
  const bigNum = BigInt(num);
  if (bigNum === 0n) {
    return 1n;
  } else {
    return bigNum * factorial(bigNum - 1n); // Núumero atual vezes o fatorial do numero menor.  Ex:  !5 =5 * !4;
  }
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(32));
console.log(factorial(9n)); //n= numero inteiro muito grande
