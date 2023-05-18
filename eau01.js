const formatZero = (number) => {
  if (number < 10) return "0" + number;
  if (number >= 10) return "" + number;
};

number1 = "";
number2 = "";
combination = "";
for (let i = 0; i < 99; i++) {
  for (let j = 0; j <= 99; j++) {
    number1 = formatZero(i);
    number2 = formatZero(j);

    if (number1 !== number2) {
      (i == 98) & (j == 99)
        ? (combination = combination + `${formatZero(i)} ${formatZero(j)}.`)
        : (combination = combination + `${formatZero(i)} ${formatZero(j)}, `);
    }
  }
}

console.log(combination);
