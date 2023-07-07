function coins(num) {
  const coins = {
    500: 0,
    100: 0,
    25: 0,
    10: 0,
    5: 0,
    1: 0,
  };
  let rest = num; // Valor que sobrou

  coins["500"] = Math.floor(rest / 500);
  rest -= 500 * Math.floor(rest / 500); // Extrai o valor restante e passa para a próxima conta.

  coins["100"] = Math.floor(rest / 100);
  rest -= 100 * Math.floor(rest / 100);

  coins["25"] = Math.floor(rest / 25);
  rest -= 25 * Math.floor(rest / 25);

  coins["10"] = Math.floor(rest / 10);
  rest -= 10 * Math.floor(rest / 10);

  coins["5"] = Math.floor(rest / 5);
  rest -= 5 * Math.floor(rest / 5);

  coins["1"] = Math.floor(rest / 1);
  rest -= 1 * Math.floor(rest / 1);

  return coins;
}

console.log(coins(478));
console.log(coins(284));
console.log(coins(5412));
console.log(coins(50));
