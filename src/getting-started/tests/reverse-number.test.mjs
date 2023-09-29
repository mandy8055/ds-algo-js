import reverseNumber from '../reverse-number.mjs';

describe('reverseNumber', () => {
  test('should return 0 for 0 input', () => {
    expect(reverseNumber(0)).toBe(0);
  });

  test('should return 321 for 123 input', () => {
    expect(reverseNumber(123)).toBe(321);
  });

  test('should return -321 for -123 input', () => {
    expect(reverseNumber(-123)).toBe(-321);
  });

  test('should return 21 for 120 input', () => {
    expect(reverseNumber(120)).toBe(21);
  });

  test('should return 4321 for 1234 input', () => {
    expect(reverseNumber(1234)).toBe(4321);
  });

  test('should return -4321 for -1234 input', () => {
    expect(reverseNumber(-1234)).toBe(-4321);
  });
});
