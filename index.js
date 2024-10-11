function stringCalculator(inputStr) {
  if (inputStr.length === 0) {
    return 0;
  }
  const numArr = inputStr.split(",");
  let total = 0;
  numArr.forEach((num) => {
    total += Number(num);
  });

  return total;
}

module.exports = stringCalculator;
