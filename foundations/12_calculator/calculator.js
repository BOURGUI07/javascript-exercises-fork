const add = function (...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number == 0) return 1;
  let result = 1;
  while (number > 0) {
    result *= number;
    number--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
