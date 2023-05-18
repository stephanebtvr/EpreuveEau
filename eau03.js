let arr = process.argv;
let arg = arr.slice(2);

isArgsValid = (arr, arg) => {
  if (arr.length != 3 || isNaN(arg[0] || arg[0] < 0)) return -1;
  return true;
};

const fibonacciSuite = (number) => {
  resultTab = [];

  for (let i = 0; i <= number; i++) {
    i == 0 ? resultTab.push(0) : "";
    i == 1 ? resultTab.push(1) : "";
    i > 1 ? resultTab.push(resultTab[i - 1] + resultTab[i - 2]) : "";
  }
  return resultTab[number];
};

isArgsValid ? console.log(fibonacciSuite(parseInt(arg[0]))) : console.log("-1");
