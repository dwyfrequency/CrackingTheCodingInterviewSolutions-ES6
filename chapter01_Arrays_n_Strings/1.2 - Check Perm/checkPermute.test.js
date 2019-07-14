const { checkPermute } = require('./checkPermute');

describe('Check Permute tests', () => {
  test('should return truthy permutation', () => {
    expect(checkPermute('aba', 'aab')).toBeTruthy();
  });
  test('should return truthy permutation', () => {
    expect(checkPermute('han', 'nha')).toBeTruthy();
  });
  test('should return falsy permutation', () => {
    expect(checkPermute('blem', 'blum')).toBeFalsy();
  });
  test('should return falsy permutation', () => {
    expect(checkPermute('cheese', 'blum')).toBeFalsy();
  });
  test('should return falsy permutation', () => {
    expect(checkPermute('aaa', 'aab')).toBeFalsy();
  });
});
