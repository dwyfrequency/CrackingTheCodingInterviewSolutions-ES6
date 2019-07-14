const { oneAway } = require('./oneAwayES6');
describe('oneAway tests', () => {
  test('should return false', () => {
    expect(oneAway('jack', 'snack')).toBe(false);
  });
  test('should return false', () => {
    expect(oneAway('zach', 'jack')).toBe(false);
  });
  test('should return true', () => {
    expect(oneAway('zack', 'jack')).toBe(true);
  });
  test('should be case insensitive', () => {
    expect(oneAway('ZaCk', 'Jack')).toBe(true);
  });
});
