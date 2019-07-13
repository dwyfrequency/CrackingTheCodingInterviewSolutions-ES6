const { isUnique } = require('./isUniqueES6');

test('strings with same characters should fail ', () => {
  const result = isUnique('hannah');
  expect(result).toBeFalsy();
});

test('strings with same characters should fail ', () => {
  const result = isUnique('bleem');
  expect(result).toBeFalsy();
});

test('strings with same characters should fail ', () => {
  const result = isUnique('abecde');
  expect(result).toBeFalsy();
});

test('strings with all unque characters should succeed', () => {
  const result = isUnique('abcde');
  expect(result).toBeTruthy();
});
