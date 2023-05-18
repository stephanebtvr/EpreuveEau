let arr = process.argv;
let arg = arr.slice(2);
const isARgsValid = (arr) => {
  if (arr[2]) return true;
  return false;
};

//console.log(arg);
const reverse = (arg) => {
  for (let i = arg.length - 1; i >= 0; i--) {
    console.log(arg[i]);
  }
};

isARgsValid(arr) ? reverse(arg) : console.log("Error");
