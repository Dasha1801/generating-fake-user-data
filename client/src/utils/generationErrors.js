const alphabetRu = "абвгдежзийклмнопрстуфхцчшщъьэяю";
const alphabetEn = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";

export const deleteSymbol = (arr, seed) => {
  return arr.map((el) => {
    const num = Math.floor(seed * el.length);
    return el.slice(0, num) + el.slice(num + 1);
  });
};

export const addSymbol = (arr, seed) => {
  return arr.map((el) => {
    const num = Math.floor(seed * el.length);
    return el.slice(0, num) + alphabetRu[num] + el.slice(num);
  });
};

export const mixSymbol = (arr, seed) => {
  return arr.map((el) => {
    const num = Math.floor((seed * el.length) / 2);
    const subStr = (el[num] + el[num + 1]).split("").reverse().join("");
    return el.slice(0, num) + subStr + el.slice(num + 2);
  });
};


