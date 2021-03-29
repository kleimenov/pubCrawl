const toCapitalize = (string) => {
  let splitStr = string.split(" ");
  let newArr = [];
  for (let word of splitStr) {
    if (word.length > 1) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      newArr.push(word);
    } else {
      newArr.push(word);
    }
  }
  return newArr.join(" ");
};

const toLowercase = (string) => {
  return string.toLowerCase();
};

module.exports = {
  toCapitalize,
  toLowercase,
};

/*
export const handlersFunctions = () => {

  const toCapitalize = (string) => {
    let splitStr = string.split(" ");
    let newArr = [];
    for (let word of splitStr) {
      if (word.length > 1) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        newArr.push(word);
      } else {
        newArr.push(word);
      }
    }
    return newArr.join(" ");
  };

  return {toCapitalize};
};
*/
