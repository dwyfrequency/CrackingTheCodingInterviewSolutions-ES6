const { oneAway } = require('./oneAwayES6');
describe('oneAway tests', () => {
  // testing deletion
  test('should return false', () => {
    expect(oneAway('jack', 'snack')).toBe(false);
  });
  test('should return true', () => {
    expect(oneAway('jack', 'jacki')).toBe(true);
  });

  // testing update
  test('should return false', () => {
    expect(oneAway('zach', 'jack')).toBe(false);
  });
  test('should return true', () => {
    expect(oneAway('zack', 'jack')).toBe(true);
  });

  // testing insertion
  test('should return false', () => {
    expect(oneAway('ach', 'jack')).toBe(false);
  });
  test('should return false', () => {
    expect(oneAway('zac', 'jack')).toBe(false);
  });
  test('should return true', () => {
    expect(oneAway('jac', 'jack')).toBe(true);
  });

  // testing case insensitivity
  test('should be case insensitive', () => {
    expect(oneAway('ZaCk', 'Jack')).toBe(true);
  });
});
