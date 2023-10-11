import powerN from '../problem9.mjs';

describe('powerN', () => {
  it('returns 1 when the exponent is 0', () => {
    expect(powerN(2, 0)).toBe(1);
    expect(powerN(10, 0)).toBe(1);
  });

  it('returns the base when the exponent is 1', () => {
    expect(powerN(2, 1)).toBe(2);
    expect(powerN(10, 1)).toBe(10);
  });

  it('returns the correct power when the exponent is greater than 1', () => {
    expect(powerN(2, 2)).toBe(4);
    expect(powerN(2, 3)).toBe(8);
    expect(powerN(10, 2)).toBe(100);
  });

  it('throws an error when the exponent is less than 0', () => {
    expect(() => powerN(2, -1)).toThrow(
      'Invalid input in context of this problem',
    );
    expect(() => powerN(10, -1)).toThrow(
      'Invalid input in context of this problem',
    );
  });
});
