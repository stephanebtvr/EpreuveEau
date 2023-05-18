let arr = process.argv;
let argument = arr.slice(2);

const areArgsValid = (argument) => {
  isTrue = true;
  if (argument.length < 2) {
    return false;
  }
  argument.forEach((element) => {
    if (!isNaN(element)) {
    } else {
      isTrue = false;
    }
  });
  return isTrue;
};

const isMinimum = (tab) => {
  sortedTab = tab.sort((a, b) => {
    return a - b;
  });
  let isMinimum = parseInt(tab[tab.length - 1]);

  for (let i = 0; i < tab.length; i++) {
    for (let j = i + 1; j < tab.length; j++) {
      difference = parseInt(Math.abs(tab[i] - tab[j]));
      if (isMinimum > difference) {
        isMinimum = difference;
      }
    }
  }
  return isMinimum;
};

areArgsValid(argument)
  ? console.log(isMinimum(argument))
  : console.log("Error");
