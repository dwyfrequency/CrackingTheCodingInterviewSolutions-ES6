/**
 * check if a permutation of a string is a palimdrome
 * @param {*} str
 */

const palimdromePermutation = str => {
  if (!str) return false; // if the str is blank just return false
  // keep a counter of character frequency
  const counter = {};
  for (const ch of str) {
    if (counter[ch]) counter[ch] += 1;
    else counter[ch] = 1;
  }
  // create an array of all frequencies from our frequency object/hashmap
  const values = Object.values(counter);
  // if the len of the string is odd, then we can have one odd modulus frequency
  if (str.length % 2 === 1) {
    let foundOne = false;
    for (const totalCnt of values) {
      if (totalCnt % 2 === 1) {
        if (foundOne) return false;
        else foundOne = true;
      }
    }
    return true;
  } else {
    return values.every(x => x % 2 === 0);
  }
};

module.exports = {
  palimdromePermutation,
};
