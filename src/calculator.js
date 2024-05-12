const add = function (stringNumbers) {
  let result = 0,
    negativeNumbers = "";
  if (stringNumbers.length <= 1) result = Number(stringNumbers);
  else {
    if (stringNumbers.startsWith("//")) {
      const index = stringNumbers.indexOf("\n");
      const delimiter = stringNumbers.substring(2, index);
      stringNumbers = stringNumbers.slice(index + 1);
      const myRegExp = new RegExp(delimiter, "gm");
      stringNumbers = stringNumbers.replace(myRegExp, ",");
    }
    stringNumbers = stringNumbers.replace("\n", ",");
    result = stringNumbers.split(",").reduce((accumulator, item) => {
      if (item.startsWith("-")) negativeNumbers += item + ",";
      if (item === "") throw new Error("Invalid Input");
      return (accumulator += Number(item));
    }, 0);
  }
  if (negativeNumbers != "")
    throw new Error(`negative numbers not allowed ${negativeNumbers}`);
  else return result;
};

module.exports = add;
