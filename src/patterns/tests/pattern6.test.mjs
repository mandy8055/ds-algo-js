import pattern6 from '../pattern6.mjs';

describe('pattern6 function', () => {
  test('should throw an error for even input', () => {
    expect(() => pattern6(2)).toThrow('n must be odd');
  });

  test('should return a diamond pattern for n = 3', () => {
    const expectedPattern =
      '*\t*\t \t*\t*\t\n*\t \t \t \t*\t\n*\t*\t \t*\t*\t\n';
    expect(pattern6(3)).toBe(expectedPattern);
  });

  test('should return a diamond pattern for n = 1', () => {
    const expectedPattern = '*\t \t*\t\n';
    expect(pattern6(1)).toBe(expectedPattern);
  });

  test('should return a diamond pattern for n = 7', () => {
    const expectedPattern =
      '*\t*\t*\t*\t \t*\t*\t*\t*\t\n*\t*\t*\t \t \t \t*\t*\t*\t\n*\t*\t \t \t \t \t \t*\t*\t\n*\t \t \t \t \t \t \t \t*\t\n*\t*\t \t \t \t \t \t*\t*\t\n*\t*\t*\t \t \t \t*\t*\t*\t\n*\t*\t*\t*\t \t*\t*\t*\t*\t\n';
    expect(pattern6(7)).toBe(expectedPattern);
  });
});
