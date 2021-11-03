/* eslint-disable operator-linebreak */
/* eslint-disable quotes */
const { Sum, Multiply, Divide, Substract } = require("./operations");

const Calculadora = (numA, numB) => {
  const sumResult = Sum(numA, numB);
  const multipResult = Multiply(numA, numB);
  const divResult = Divide(numA, numB);
  const substrResult = Substract(numA, numB);

  let resultHtml = "";
  if (
    numA === null ||
    numB === null ||
    Number.isNaN(numA) ||
    Number.isNaN(numB)
  ) {
    resultHtml = "<div> Error </div>";
  } else {
    resultHtml = `
  <div>
  <p>${numA} + ${numB} = ${sumResult} </p>
<p>${numA} - ${numB} = ${substrResult}</p>
<p>${numA} * ${numB} = ${multipResult}</p>
<p>${numA} / ${numB} = ${divResult}</p>
<div>
`;
  }
  return resultHtml;
};

module.exports = { Calculadora };
