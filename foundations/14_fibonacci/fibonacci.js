const fibonacci = function (val) {
  if (val < 2) return val;
  return fibonacci(val - 1) + fibonacci(val - 2);
};

// Do not edit below this line
module.exports = fibonacci;
