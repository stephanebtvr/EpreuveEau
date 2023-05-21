let arr = process.argv;
let argument = arr.slice(2);
str = argument[0];

const areARgsValid = (argument) => {
  if (argument.length != 1) {
    return false;
  }
  return true;
};
const testDigit = (str) => {
  for (let j = 0; j <= str.length - 1; j++) {
    if (!parseInt(str[j])) {
      return false;
    }
  }
  return true;
};

areARgsValid(argument) ? console.log(testDigit(str)) : console.log("Error");
