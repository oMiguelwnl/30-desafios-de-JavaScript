class Equation {
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getRoots() {
    // 1 Case
    if (this.a === 0 && this.b === 0 && this.c === 0) {
      return `Erro! Nenhum parâmetro informado.`;
    }
    // 2 Case
    if (this.a === 0 && this.b === 0) {
      console.log(`1. Parâmetros insuficientes. Nenhuma raiz.`);
      return [];
    }
    // 2 Case
    if (this.a === 0) {
      // b*x + c = 0
      console.log(`1. ${this.b}x + ${this.c} = 0`);
      console.log(`2. ${this.b}x = ${this.c * -1}`);
      console.log(`3. x = ${this.c * -1} / ${this.b}`);
      console.log(`4. x = ${(this.c * -1) / this.b}`);

      return [(this.c * -1) / this.b];
    }
    // 3 Case
    const delta = this.b ** 2 - 4 * this.a * this.c;
    console.log(`1. Δ = ${this.b}² - 4 * ${this.a} * ${this.c}`);
    console.log(`2. Δ = ${delta}`);

    if (delta < 0) {
      console.log(`Δ < 0\nNenhuma raiz.`);
      return [];
    }

    console.log(`3. x' =(-(${this.b}) + √${delta})/2 * ${this.a} `);
    console.log(`4. x'' =(-(${this.b}) - √${delta})/2 * ${this.a} `);
    console.log(`5. x' =${this.b * -1} +  √${delta} / ${this.a * 2}`);
    console.log(`6. x'' =${this.b * -1} -  √${delta} / ${this.a * 2}`);

    const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
    const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);

    if (Number.isInteger(Math.sqrt(delta))) {
      console.log(
        `7. x'=${this.b * -1} + ${Math.sqrt(delta)}/ ${this.a * 2}  `
      );
      console.log(
        `8. x'=${this.b * -1} + ${Math.sqrt(delta)}/ ${this.a * 2}  `
      );
      console.log(`9. x'=${x1} `);
      console.log(`10. x''=${x2} `);
    }
    return x1 === x2 ? [x1] : [x1, x2];
  }
}

const eq1 = new Equation(0, 2, 6); //[-3]
const eq2 = new Equation(); // Erro
const eq3 = new Equation(0, 0, 5); //[]
const eq4 = new Equation(1, -4, -5); //[5,-1]

console.log(eq1.getRoots());
console.log(eq2.getRoots());
console.log(eq3.getRoots());
console.log(eq4.getRoots());
