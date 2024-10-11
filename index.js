function stringCalculatorWithDelimiter(inputStr, delimiter) {
  const numArr = inputStr.toString().split(delimiter);
  let total = 0;
  const arrNegativeNum = [];
  numArr.forEach((num) => {
    total += !isNaN(num) && Number(num) <= 1000 ? Number(num) : 0;
    if (num < 0) {
      arrNegativeNum.push(Number(num));
    }
  });
  if (arrNegativeNum.length > 0) {
    throw new Error(
      `Negative numbers are not allowed: ${arrNegativeNum.join(", ")}`
    );
  }

  return total;
}

function stringCalculator(inputStr) {
  if (inputStr.length === 0) {
    return 0;
  }
  inputStr = inputStr.split("\n").toString().split(",");
  const delimiter =
    inputStr[0][0] + inputStr[0][1] === "//"
      ? inputStr[0].replace("//", "")
      : ",";
  if (delimiter === ",") {
    return stringCalculatorWithDelimiter(inputStr, ",");
  } else if (delimiter.match(/\[[^\s]+\]/)) {
    return stringCalculatorWithDelimiter(
      inputStr[1],
      delimiter.slice(1,delimiter.length-1)
    );
  } else {
    return stringCalculatorWithDelimiter(inputStr[1], delimiter);
  }
}
module.exports = stringCalculator;
