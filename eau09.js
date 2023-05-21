let arr = process.argv;
let argument = arr.slice(2);

const areARgsValid = (argument) => {
  if (argument.length != 2 || isNaN(argument[0]) || isNaN(argument[1])) {
    return false;
  }
  return true;
};

const intervalMnMx = (tab) => {
  str = "";
  sortedTab = tab.sort((a, b) => {
    return a - b;
  });
  for (let i = sortedTab[0]; i < sortedTab[sortedTab.length - 1]; i++) {
    str = str + i + " ";
  }
  return str;
};

areARgsValid(argument)
  ? console.log(intervalMnMx(argument))
  : console.log("Error");
