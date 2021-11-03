/* eslint-disable quotes */
const { Sum, Multiply, Divide, Substract } = require("./operations");

const Calculadora = () => {
  const numA = process.argv.slice(2)[0];
  const numB = process.argv.slice(2)[1];

  const sumResult = Sum(numA, numB);
  const multipResult = Multiply(numA, numB);
  const divResult = Divide(numA, numB);
  const substrResult = Substract(numA, numB);

  const tableOfOperations = `${numA} + ${numB} = ${sumResult} 
${numA} - ${numB} = ${substrResult}
${numA} * ${numB} = ${multipResult}
${numA} / ${numB} = ${divResult}`;
  console.log(tableOfOperations);
};

console.log(Calculadora());
