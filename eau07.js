let arr = process.argv;
let argument = arr.slice(2);

const areArgsValid = (argument) => {
  if (argument.length != 1) {
    return false;
  }
  return true;
};
const lowerUpper = (str) => {
  if ((typeof str != "string") & !isNaN(str)) {
    console.log("Mauvaise entrée");
    process.exit();
  }
  let regex = " ";
  myArray = str.split(regex);
  newArray = [];

  for (let i = 0; i <= myArray.length - 1; i++) {
    newStr = "";
    for (let j = 0; j < myArray[i].length; j++) {
      if (j == 0) {
        newStr = newStr + myArray[i][j].toUpperCase();
      } else {
        newStr = newStr + myArray[i][j].toLowerCase();
      }
    }
    newArray.push(newStr);
  }
  return newArray.join(" ");
};

areArgsValid(argument)
  ? console.log(lowerUpper(argument[0]))
  : console.log("Error");
