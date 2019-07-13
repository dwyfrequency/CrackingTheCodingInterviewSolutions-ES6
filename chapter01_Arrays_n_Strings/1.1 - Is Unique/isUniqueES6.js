/*
string has all unique characters without using additional data structures
*/
// Time O(n^2) | Space O(1)
export const isUnique = str => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};
