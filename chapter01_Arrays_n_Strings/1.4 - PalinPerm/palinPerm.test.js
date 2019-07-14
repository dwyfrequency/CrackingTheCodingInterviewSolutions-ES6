const { palimdromePermutation } = require('./palinPerm');
describe('palinPerm tests', () => {
  test('should not find palindrome', () => {
    expect(palimdromePermutation('baaz')).toBeFalsy();
  });
  test('should not find palindrome', () => {
    expect(palimdromePermutation('loop')).toBeFalsy();
  });
  test('should not find palindrome', () => {
    expect(palimdromePermutation('lozope')).toBeFalsy();
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
  test('should find palindrome even with varied cases', () => {
    expect(palimdromePermutation('Racceare')).toBeTruthy();
  });
});
