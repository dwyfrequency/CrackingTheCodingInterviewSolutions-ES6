const { palimdromePermutation } = require('./palinPermES6');
describe('palinPerm tests', () => {
  test('should not find palindrome', () => {
    expect(palimdromePermutation('baaz')).toBeFalsy();
  });
  test('should not find palindrome', () => {
    expect(palimdromePermutation('loop')).toBeFalsy();
  });
  test('should find palindrome', () => {
    expect(palimdromePermutation('ahnnha')).toBeTruthy();
  });
  test('should find palindrome', () => {
    expect(palimdromePermutation('abzab')).toBeTruthy();
  });
  test('should find palindrome', () => {
    expect(palimdromePermutation('racceare')).toBeTruthy();
  });
});
