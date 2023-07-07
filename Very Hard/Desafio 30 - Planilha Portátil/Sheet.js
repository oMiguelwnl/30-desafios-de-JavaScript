const Cell = require("./Cell");
const fs = require("fs");

class Sheet {
  constructor(name, cells = []) {
    this.name = name;
    this.cells = cells;
  }
  readCell(label) {
    const cell = this.cells.find((cell) => cell.label === label); // Verifica se a label da célula é igual à label que ela recebeu.
    return cell?.value ?? ""; // Retorna o valor da célula correspondente à label fornecida ou uma string vazia se a célula não for encontrada ou não tiver um valor definido.
  }
  writeCell(value, label) {
    const operationRegex = Object.keys(Cell.operations).join("\\(|^");
    const isFormulaRegex = new RegExp(`^${operationRegex}\\(`);

    const isFormula =
      typeof value === "string" && !!value.match(isFormulaRegex); // Determina se value representa uma fórmula válida.
    if (isFormula) {
      this.saveCell("", label, value); // O valor da célula é salvo como uma fórmula, com um valor vazio "" e a própria fórmula value.
    } else {
      this.saveCell(value, label); // O valor da célula é salvo diretamente como o valor fornecido em value.
    }
  }
  saveCell(value, label, formula = null) {
    const cellAlreadyExists = !!this.cells.find((cell) => cell.label === label);
    if (cellAlreadyExists) {
      return this.updateCell(value, label, formula); // Caso a célula exista, ela será atualizada.
    }
    const newCell = new Cell(this, label, value, formula); // Caso ela não exista, ela será criada.
    this.cells.push(newCell); // A célula será adicionada.

    if (formula) {
      const params = newCell.getParamsFromFormula();
      this.cells.forEach((cell) => {
        cell.removeDependent(label); // Remove a dependência da célula atual com a label especificada.
        if (params.includes(cell.label)) {
          cell.addDependent(newCell);
        }
      });
      newCell.calculateFormula();
    }
  }
  updateCell(value, label, formula = null) {
    const cellIndex = this.cells.findIndex((cell) => cell.label === label);
    const cellToUpdate = this.cells[cellIndex];
    cellToUpdate.update(value, formula);
    if (formula) {
      const params = cellToUpdate.getParamsFromFormula();

      this.cells.forEach((cell) => {
        cell.removeDependent(label);
        if (params.includes(cell.label)) {
          cell.addDependent(cellToUpdate);
        }
      });
      cellToUpdate.calculateFormula(); // Corrigido para chamar calculateFormula() na célula atualizada
    }
  }
  // Save File
  static saveFile(sheet, name) {
    const nonCircularSheet = new Sheet(sheet.name);
    sheet.cells.forEach((cell) => {
      nonCircularSheet.saveCell(cell.value, cell.label, cell.formula);
    });
    nonCircularSheet.cells.forEach((cell) => {
      cell.sheet = "self";
      cell.dependents = [];
    });
    const stringfileData = JSON.stringify(nonCircularSheet);
    fs.writeFile(`${name}.sheet`, stringfileData, "utf-8", (err) => {
      console.log(err);
    });
  }
  static openFile(file) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const loadedSheet = JSON.parse(data);
          const newSheet = new Sheet(loadedSheet.name);
          loadedSheet.cells.forEach((cell) => {
            newSheet.saveCell(cell.value, cell.label, cell.formula);
          });
          resolve(newSheet);
        }
      });
    });
  }
}
module.exports = Sheet;
