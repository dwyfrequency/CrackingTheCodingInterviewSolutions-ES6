/**
 *
 *  Write a method to replace all spaces in a string with '%20'
 * You may assume that the string has sufficient space at the end to
 * hold the additional characters, and that you are given the "true"
 * length of the string.
 */
const urlify = (str, len) => {
  const strArr = [];
  for (let i = 0; i < len; i++) {
    if (str[i] === ' ') strArr.push('%20');
    else strArr.push(str[i]);
  }
  return strArr.join('');
};

module.exports = {
  urlify,
};
