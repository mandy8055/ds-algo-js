import countDigitsInN from '../count-digits-in-n.mjs';

describe('countDigitsInN', () => {
  it('returns 1 for n = 0', () => {
    expect(countDigitsInN(0)).toBe(1);
  });

  it('returns 1 for 0 < n < 10', () => {
    expect(countDigitsInN(1)).toBe(1);
    expect(countDigitsInN(5)).toBe(1);
    expect(countDigitsInN(9)).toBe(1);
  });

  it('returns 6 for 100000 <= n < 1000000', () => {
    expect(countDigitsInN(100000)).toBe(6);
    expect(countDigitsInN(500000)).toBe(6);
    expect(countDigitsInN(999999)).toBe(6);
  });

  it('returns 7 for 1000000 <= n < 10000000', () => {
    expect(countDigitsInN(1000000)).toBe(7);
    expect(countDigitsInN(5000000)).toBe(7);
    expect(countDigitsInN(9999999)).toBe(7);
  });

  it('returns 8 for 10000000 <= n < 100000000', () => {
    expect(countDigitsInN(10000000)).toBe(8);
    expect(countDigitsInN(50000000)).toBe(8);
    expect(countDigitsInN(99999999)).toBe(8);
  });

  it('throws an error for n < 0', () => {
    expect(() => countDigitsInN(-1)).toThrow(
      'n must be a non-negative integer',
    );
    expect(() => countDigitsInN(-100)).toThrow(
      'n must be a non-negative integer',
    );
  });

  it('throws an error for non-integer n', () => {
    expect(() => countDigitsInN(1.5)).toThrow(
      'n must be a non-negative integer',
    );
    expect(() => countDigitsInN(0.001)).toThrow(
      'n must be a non-negative integer',
    );
  });
});
