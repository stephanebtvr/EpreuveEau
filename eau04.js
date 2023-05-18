let arr = process.argv;

let argument = arr.slice(2);
number = argument[0];

const areARgsValid = (arr, argument) => {
  if (
    arr.length != 3 ||
    isNaN(argument[0]) & (argument[0] != parseInt(argument[0]))
  ) {
    return false;
  }
  return true;
};

const isPrimeNumber = (argument) => {
  argument = parseInt(argument);
  if (argument == 0 || argument == 1) {
    return true;
  }

  for (let i = 2; i < argument; i++) {
    if (argument % i == 0) {
      // test du modulo dans la boucle
      return false; // S'il y a au moins 1 cas possible, ce n'est pas un nombre Premier
    }
  }
  return true;
};

const closestPrimeNumber = (number, cb) => {
  primeNumber = 0;
  let i = number;
  while (i >= number) {
    if (cb != undefined) {
      if (cb(i)) {
        return i + " est le plus proche nombre premier supérieur";
      } else {
        i++;
      }
    }
  }
};

// On élimine les cas 0 et 1

areARgsValid(arr, argument)
  ? console.log(closestPrimeNumber(number, isPrimeNumber))
  : console.log("-1");
