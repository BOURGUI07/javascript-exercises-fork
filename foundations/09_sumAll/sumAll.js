const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    typeof start != "number" ||
    typeof end != "number" ||
    String(start).includes(".") ||
    String(end).includes(".")
  ) {
    throw new Error(`Invalid input. start:${start}, end:${end}`);
  }
  if (end < start) {
    [end, start] = [start, end];
  }
  sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
