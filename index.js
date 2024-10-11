function stringCalculatorWithDelimiter(inputStr, delimiter) {
  const numArr = inputStr.toString().split(delimiter);
  let total = 0;
  numArr.forEach((num) => {
    total += !isNaN(num) ? Number(num) : 0;
  });

  return total;
}

function stringCalculator(inputStr) {
  if (inputStr.length === 0) {
    return 0;
  }
  inputStr = inputStr.split("\n").toString().split(",");
  const delimiter =
    inputStr[0][0] + inputStr[0][1] === "//" ? inputStr[0][2] : ',';
  switch (delimiter) {
    case ",":
      return stringCalculatorWithDelimiter(inputStr, ",");
    default:
      return stringCalculatorWithDelimiter(inputStr[1], delimiter);
  }
}

module.exports = stringCalculator;
