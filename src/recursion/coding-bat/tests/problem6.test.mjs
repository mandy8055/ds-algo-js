import sumDigits from '../problem6.mjs';

describe('sumDigits function', () => {
  it('should return 0 when input is 0', () => {
    expect(sumDigits(0)).toBe(0);
  });

  it('should return the sum of digits when input is a positive number', () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(456)).toBe(15);
  });

  it('should handle large numbers', () => {
    expect(sumDigits(1234567890)).toBe(45);
  });
});
