const Calculator = require("./calculator");

class Cell {
  constructor(sheet, label, value = "", formula = null, dependents = []) {
    this.sheet = sheet;
    this.label = label;
    this.value = value;
    this.formula = formula;
    this.dependents = dependents;
  }
  static operations = {
    SUM: Calculator.sum,
    SUB: Calculator.substract,
    MUL: Calculator.muliply,
    DIV: Calculator.divide,
    MIN: Calculator.minimum,
    MAX: Calculator.maximum,
    AVG: Calculator.average,
  };
  calculateFormula() {
    const operation = this.formula.slice(0, 3);
    const params = this.getParamsFromFormula();

    const values = this.sheet.cells
      .filter((cell) => params.includes(cell.label))
      .map((cell) => cell.value);

    const operationsHandler = Cell.operations[operation];
    const result = operationsHandler(...values);

    if (this.value === result) {
      return;
    }
    this.value = result;
    this.notifyDependents();
    return result;
  }

  getParamsFromFormula() {
    const extractedParamsString = this.formula.match(/\(({[^]+})\)/)[1]; // Armazena a string entre parênteses extraída da fórmula.
    const paramsWithGroups = extractedParamsString.split(":"); //  Array que contém as substrings obtidas a partir da divisão de extractedParamsString usando o caractere ":".
    const allParms = []; // Lista final de parâmetros que será retornada pelo método.

    paramsWithGroups.forEach((param) => {
      if (param.includes(":")) {
        // Verifica se o parâmetro contém o caractere ":"
        const [first, last] = param.split(":"); // As variáveis "first" e "last" contêm os valores extraídos da string "param".

        const firstLetter = first.match(/[A-Z]/)[0]; // Armazena a primeira letra extraída de first
        const firstNumber = Number(first.match(/[0-9]/g).join("")); // Armazena o número extraído de first convertido para um número.

        const lastLetter = last.match(/[A-Z]/)[0]; // Armazena a primeira letra extraída de "last" .
        const lastNumber = Number(last.match(/[0-9]/g).join("")); // Armazena o número extraído de last convertido para um número.

        const cells = []; // Células geradas.

        for (
          let i = firstLetter.charCodeAt(0);
          i <= lastLetter.charCodeAt(0);
          i++
        ) {
          for (let j = firstNumber; j <= lastNumber; j++) {
            cells.push(String.fromCharCode(i) + j.toString());
          }
        }
        allParms.push(...cells);
      } else {
        allParms.push(param);
      }
    });
    return allParms;
  }
  addDependent(cell) {
    this.dependents.push(cell);
  }
  removeDependent(label) {
    const updatedDependents = this.dependents.filter(
      (dependent) => dependent.label !== label
    );
    this.dependents = updatedDependents;
  }
  notifyDependents() {
    this.dependents.forEach((dependent) => {
      dependent.calculateFormula();
    });
  }
  updated(value, formula = null) {
    this.value = value;
    this.formula = formula;

    this.notifyDependents();
  }
}
module.exports = Cell;
