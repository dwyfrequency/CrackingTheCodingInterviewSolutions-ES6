// are we one edit/insert/delete away from the first string
// Time O(n + m) | Space O(n)
// n for str1 and m for str2 | space we just say whichever is bigger for the
// js object/hashmap
const oneAway = (str1, str2) => {
  // if the distance is more than two, one edit cannot meet requirement
  if (Math.abs(str1.length - str2.length) >= 2) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const frequencyCnt = {};
  let bigger, smaller;
  // need biggest string for hashmap else we can have off by one error
  // 'jack' 'zac' if we have hashmap of zac {z: 1, a: 1, c: 1} -> {z: 1, a: 0, c: 0}
  // when we get to the reduce stage this will pass b/c we dont account for the
  // character 'k'
  if (str1.length < str2.length) {
    bigger = str2;
    smaller = str1;
  } else {
    bigger = str1;
    smaller = str2;
  }
  // create obj/hashmap of all frequencies of letter cnt using the biggest
  for (const ch of bigger) {
    if (frequencyCnt[ch]) frequencyCnt[ch] += 1;
    else frequencyCnt[ch] = 1;
  }
  for (const ch of smaller) {
    if (frequencyCnt[ch]) frequencyCnt[ch] -= 1;
    else if (frequencyCnt[ch] <= 0) frequencyCnt[ch] -= 1;
  }
  // if the total changes is less than 2, then we can meet the requirements
  // with one update
  const totalChanges = Object.values(frequencyCnt).reduce(
    (accum, freqCnt) => accum + Math.abs(freqCnt),
    0
  );
  return totalChanges < 2;
};
oneAway('zac', 'jack');

module.exports = {
  oneAway,
};
