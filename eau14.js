let arr = process.argv;
let argument = arr.slice(2);

const areArgsValid = (argument) => {
  if (argument.length < 1) {
    return false;
  }
  return true;
};

const asciiOrder = (tab) => {
  // renvoyer un tableau avec les code ascii correspondant
  newArray = [];
  nextArray = [];
  console.log(String.fromCharCode(97));
  for (let i = 0; i < tab.length; i++) {
    newArray.push(tab[i].charCodeAt());
  }
  // Trier les codes
  newArray.sort((a, b) => {
    return a - b;
  });
  console.log(newArray);
  // afficher les String correspondant
  for (let j = 0; j < newArray.length; j++) {
    newArray[j] = String.fromCharCode(newArray[j]);
    //nextArray.push();
  }
  return newArray;
};

areArgsValid(argument)
  ? console.log(asciiOrder(argument))
  : console.log("Error");
