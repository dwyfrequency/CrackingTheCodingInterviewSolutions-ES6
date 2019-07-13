import { isUnique } from './isUniqueES6';

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

test('strings with all uniwur characters should fail succeed', () => {
  const result = isUnique('abecde');
  expect(result).toBeTruthy();
});
