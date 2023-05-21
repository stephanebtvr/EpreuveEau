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
    return console.log("Error");
  }
  myArray = str.split(" ");
  newArray = [];

  for (let i = 0; i <= myArray.length - 1; i++) {
    newStr = "";
    for (let j = 0; j < myArray[i].length; j++) {
      if (j % 2 != 0) {
        newStr = newStr + myArray[i][j].toLowerCase();
      } else {
        newStr = newStr + myArray[i][j].toUpperCase();
      }
    }
    newArray.push(newStr);
  }
  return newArray.join(" ");
};

areArgsValid(argument)
  ? console.log(lowerUpper(argument[0]))
  : console.log("Error");
