let arr = process.argv;
let argument = arr.slice(2);

const areARgsValid = (argument) => {
  if (argument.length <= 1) {
    return false;
  }
  return true;
};

const isIncludedStr = (tab) => {
  lastElement = tab.pop();
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] == lastElement) {
      return i;
    }
  }
  return -1;
};

areARgsValid(argument)
  ? console.log(isIncludedStr(argument))
  : console.log("Error");
