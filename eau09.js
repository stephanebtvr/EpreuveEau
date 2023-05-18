let arr = process.argv;
let argument = arr.slice(2);
newArray = [];
c = 0;

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

const myBubbleSort = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    for (let j = i + 1; j < tab.length; j++) {
      if (parseInt(tab[i]) > parseInt(tab[j])) {
        console.log(tab);
        c = parseInt(tab[i]);
        tab[i] = parseInt(tab[j]);
        tab[j] = c;
      }
    }
  }
  return tab;
};

areArgsValid(argument)
  ? console.log(myBubbleSort(argument))
  : console.log("Error");
