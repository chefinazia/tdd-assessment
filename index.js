function stringCalculatorWithDelimiter(inputStr, delimiter) {
  const numArr = inputStr.split(delimiter);
  let total = 0;
  numArr.forEach((num) => {
    total += Number(num);
  });

  return total;
}

function stringCalculator(inputStr) {
  if (inputStr.length === 0) {
    return 0;
  }
  const delimiter =
    inputStr[1] === ',' ? "," : "\n";
  switch (delimiter) {
    case ",":
      return stringCalculatorWithDelimiter(inputStr, ",");
    case "\n":
      return stringCalculatorWithDelimiter(inputStr, "\n");
    default:
      return stringCalculatorWithDelimiter(inputStr, ",");
  }
}

module.exports = stringCalculator;
