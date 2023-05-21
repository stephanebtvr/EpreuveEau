let arr = process.argv;
let argument = arr.slice(2);
includedString = argument[argument.length - 1];

const areArgsValid = (argument) => {
  if (argument.length != 2) {
    return false;
  }
  return true;
};
// const doublonGestion = (str) => {
//   newStr = "";
//   newArray = [];
//   first = "";
//   for (let i = 0; i < str.length; i++) {
//     if (newStr.indexOf(str[i]) == -1) {
//       newStr = newStr + str[i];
//     } else {
//       newArray.push(i);
//       first = str[i];
//     }
//   }
//   return newArray;
// };
const stringIsIncluded = (str, includedString) => {
  index = str.indexOf(includedString);
  if (index == -1) {
    return false;
  }
  return true;
};

areArgsValid(argument)
  ? console.log(stringIsIncluded(argument[0], includedString))
  : console.log("Error");
