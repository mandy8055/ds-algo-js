import factorial from '../problem1.mjs';

describe('factorial', () => {
  it('returns 1 when input is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('returns correct factorial for positive numbers', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });

  it('throws an error for negative numbers', () => {
    expect(() => factorial(-1)).toThrow();
  });
});
