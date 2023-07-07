class Position {
  constructor(row, col, value) {
    this.label = `${row},${col}`; // Rótulo da posição (formato: "row,col").
    this.row = row; // Índice da linha.
    this.col = col; // Índice da coluna.
    this.value = value; // Valor da posição (ex: "S", "E", " ", "#").
    this.neighbors = []; // Lista de vizinhos da posição.
  }

  // Conexão de posições vizinhas.
  connect(position) {
    if (!this.isNeighbor(position)) {
      // Verifica se a posição atual não possui a posição fornecida como vizinha.
      this.neighbors.push(position); // Adiciona a posição fornecida à lista de vizinhos da posição atual.
      position.neighbors.push(this); // Adiciona a posição atual como vizinha na lista de vizinhos da posição fornecida.
    }
  }

  // Retorna a lista de vizinhos da posição.
  getNeighbors() {
    return this.neighbors;
  }

  // Verifica se a posição atual possui a posição fornecida como vizinha.
  isNeighbor(position) {
    return !!this.neighbors.find(
      (neighbor) =>
        neighbor.row === position.row && neighbor.col === position.col
    );
  }
}

class Maze {
  constructor(grid = [[]]) {
    this.grid = grid; // Labirinto representado como uma matriz de caracteres.
    this.rows = grid.length; // Número de linhas do labirinto.
    this.cols = grid[0].length; // Número de colunas do labirinto.

    this.positions = []; // Lista de posições no labirinto.
    this.generateGraph(); // Gera as posições do labirinto e preenche o array "positions".

    this.start = this.positions.find((pos) => pos.value === "S"); // Posição inicial do labirinto.
    this.end = this.positions.find((pos) => pos.value === "E"); // Posição final do labirinto.
  }

  // Gera as posições correspondentes a cada célula do labirinto.
  generateGraph() {
    const rowDirections = [-1, 1, 0, 0]; // Direções possíveis de movimento verticalmente.
    const colDirections = [0, 0, -1, 1]; // Direções possíveis de movimento horizontalmente.

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.positions.push(new Position(i, j, this.grid[i][j]));
      }
    }

    this.connectNeighbors();
  }

  // Conecta as posições vizinhas dentro do labirinto.
  connectNeighbors() {
    const rowDirections = [-1, 1, 0, 0]; // Direções possíveis de movimento verticalmente.
    const colDirections = [0, 0, -1, 1]; // Direções possíveis de movimento horizontalmente.

    this.positions.forEach((position) => {
      for (let i = 0; i < 4; i++) {
        const rowIndexToMove = position.row + rowDirections[i]; // Nova coordenada row para a célula vizinha.
        const colIndexToMove = position.col + colDirections[i]; // Nova coordenada col para a célula vizinha.

        const isOutOfBounds =
          rowIndexToMove < 0 ||
          rowIndexToMove >= this.rows ||
          colIndexToMove < 0 ||
          colIndexToMove >= this.cols;

        if (!isOutOfBounds) {
          const neighbor = this.positions.find(
            (pos) => pos.row === rowIndexToMove && pos.col === colIndexToMove
          );
          position.connect(neighbor);
        }
      }
    });
  }

  // Busca em largura para encontrar o melhor caminho através do labirinto.
  breadthFirstSearch() {
    const queue = [this.start]; // Fila que armazena as posições a serem exploradas.
    const walkedPositions = {}; // Objeto para rastrear as posições visitadas.

    walkedPositions[this.start.label] = null;

    while (queue.length > 0) {
      const position = queue.shift();

      if (position.value === "E") {
        console.log("You found the exit!");
        return this.reconstructPath(walkedPositions, position);
      }

      position.getNeighbors().forEach((neighbor) => {
        if (
          neighbor.value !== "#" &&
          !walkedPositions.hasOwnProperty(neighbor.label)
        ) {
          walkedPositions[neighbor.label] = position;
          queue.push(neighbor);
        }
      });
    }

    return "No way out!";
  }

  // Reconstrói o caminho percorrido até a posição final.
  reconstructPath(walkedPositions, end) {
    let currentPosition = end;
    const shortestPath = [];

    while (currentPosition !== null) {
      shortestPath.unshift(currentPosition.label);
      currentPosition = walkedPositions[currentPosition.label];
    }

    return shortestPath;
  }
}

const labyrinth1 = [
  ["#", " ", " ", " ", " ", "#", " "],
  [" ", "S", " ", " ", "#", " ", " "],
  [" ", " ", "#", " ", " ", "#", " "],
  [" ", "#", " ", " ", " ", "#", "E"],
  [" ", " ", " ", " ", " ", " ", " "],
  ["#", "#", " ", " ", "#", " ", " "],
  [" ", " ", " ", " ", " ", " ", " "],
];

const labyrinth2 = [
  ["E", " ", " ", " "],
  ["#", " ", "#", " "],
  [" ", " ", " ", " "],
  [" ", "#", "#", " "],
  [" ", " ", "#", " "],
  ["#", " ", "#", " "],
  [" ", " ", "#", " "],
  [" ", " ", " ", "S"],
];

const labyrinth3 = [
  ["#", " ", " ", " ", " "],
  [" ", "S", " ", " ", "#"],
  [" ", " ", "#", " ", " "],
  [" ", "#", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  ["#", "#", " ", " ", "#"],
  [" ", " ", " ", " ", " "],
];

const maze1 = new Maze(labyrinth1);
console.log(maze1.breadthFirstSearch());

const maze2 = new Maze(labyrinth2);
console.log(maze2.breadthFirstSearch());

const maze3 = new Maze(labyrinth3);
console.log(maze3.breadthFirstSearch());
