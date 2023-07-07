const Sheet = require("./Sheet");

const sheet1 = new Sheet("Planilha 1");
console.log(sheet1);

sheet1.writeCell(4, "A1");
console.log("A1:", sheet1.readCell("A1"));

sheet1.writeCell(4, "A2");
console.log("A2:", sheet1.readCell("A2"));

sheet1.writeCell(0, "B1");
console.log("B1:", sheet1.readCell("B1"));

sheet1.writeCell(3, "B2");
console.log("B2:", sheet1.readCell("B2"));

sheet1.writeCell(0, "C1");
console.log("C1:", sheet1.readCell("C1"));

sheet1.writeCell(3, "C2");
console.log("C2:", sheet1.readCell("C2"));

sheet1.writeCell("SUM (A1:C2)", "A3");
console.log("A3:", sheet1.readCell("A3"));

sheet1.writeCell(8, "A1");
console.log("A1:", sheet1.readCell("A1"));
console.log("A3:", sheet1.readCell("A3"));

sheet1.writeCell("AVG (A1;A2;A3)", "A4");
console.log("A$:", sheet1.readCell("A$"));
