const { urlify } = require('./urlifyes6');

describe('urlify tests', () => {
  test('should transform text', () => {
    expect(urlify('Mr John Smith ', 13)).toBe('Mr%20John%20Smith');
    expect(urlify('Tom Brown   ', 9)).toBe('Tom%20Brown');
  });
  test('should be falsy', () => {
    expect(urlify('', 0)).toBeFalsy();
  });
});
