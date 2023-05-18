const isNotDoubleDigit = (number, cb) => {
  number = Math.abs(number).toString();
  cb !== undefined ? (number = cb(number)) : "";

  newStr = "";
  for (let i = 0; i < number.length; i++) {
    if (newStr.indexOf(number[i]) != -1) {
      return false;
    } else {
      newStr = newStr + number[i];
    }
  }
  return true;
};
const formatZero = (number) => {
  if (number < 10) return "00" + number;
  if (number < 100) return "0" + number;
  if (number >= 100) return number;
};
const sort = (number) => {
  tab = Math.abs(number).toString().split("");
  let sort = tab.sort();
  return sort.join("");
};

tabSum = [];
resulTab = [];

for (let i = 12; i <= 999; i++) {
  if (tabSum.indexOf(sort(i)) == -1) {
    if (isNotDoubleDigit(i, formatZero)) {
      tabSum.push(sort(i));
      resulTab.push(formatZero(i));
    }
  }
}
console.log(resulTab.join(", "));
