const add = function (stringNumbers) {
  let result = 0;
  if (stringNumbers.length <= 1) result = Number(stringNumbers);
  else {
    result = stringNumbers.split(",").reduce((accumulator, item) => {
      return (accumulator += Number(item));
    }, 0);
  }
  return result;
};

module.exports = add;
