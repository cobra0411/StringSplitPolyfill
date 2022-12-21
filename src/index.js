// string .split polyfill

const split = (currStr, delimiter = "") => {
  let result = [];
  if (delimiter === "") {
    return Array.from(currStr);
  }

  const splitString = (strr) => {
    if (!strr) {
      return;
    }
    const indx = strr.indexOf(delimiter);
    if (indx >= 0) {
      const sub = strr.substring(0, indx);
      result.push(sub);
      const newString = strr.substring(indx + delimiter.length);
      splitString(newString);
      return;
    } else {
      result.push(strr);
      return;
    }
  };
  splitString(currStr, 0);

  return result;
};
console.log(split("helloeeroeo", "ee"));
