let arr = process.argv;
let argument = arr.slice(2);
c = 0;
isLower = 0;

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
  min = tab[0];
  for (let i = 1; i < tab.length; i++) {
    if (tab[i] < min) {
      min = tab[i];
    }
  }
  return min;
};

const mySelectionSort = (tab) => {
  for (let i = 0; i < tab.length - 1; i++) {
    isLower = i;

    for (let j = i + 1; j < tab.length; j++) {
      if (parseInt(tab[isLower]) > parseInt(tab[j])) {
        isLower = j;
      }
    }
    if (isLower != i) {
      c = parseInt(tab[i]);
      tab[i] = parseInt(tab[isLower]);
      tab[isLower] = c;
    }
  }
  return tab;
};
areArgsValid(argument)
  ? console.log(mySelectionSort(argument))
  : console.log("Error");
