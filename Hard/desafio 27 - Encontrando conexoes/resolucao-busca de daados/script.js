const results = [];

function findConnections(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (key === "connection") {
      results.push([value.id, value.label]);
    }
    if (key === "connections") {
      value.forEach((connection) => {
        results.push([connection.id, connection.label]);
      });
    }

    if (Array.isArray(value)) {
      value.forEach((element) => {
        findConnections(element);
      });
    } else if (Object.prototype.toString.call(value) === "[object Object]") {
      findConnections(value);
    }
  });
}

const data0 = require("./Arquivos de Teste do desafio 27/data-0.json");
findConnections(data0);
console.log(results);

// import data1 from "./Arquivos de Teste do desafio 27/data-1.json";
// console.log(findConnections(data1));

// import data2 from "./Arquivos de Teste do desafio 27/data-2.json";
// console.log(findConnections(data2));
