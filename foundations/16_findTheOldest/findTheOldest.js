const findTheOldest = function (data) {
  return data
    .map((p) => {
      return { ...p, age: p["yearOfDeath"] - p["yearOfBirth"] };
    })
    .sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
