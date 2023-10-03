import countDigitFrequency from '../digit-frequency-in-number.mjs';

describe('countDigitFrequency', () => {
  it('counts frequency of digit in positive integer', () => {
    expect(countDigitFrequency(12345, 3)).toBe(1);
  });

  it('returns 0 when digit is not in positive integer', () => {
    expect(countDigitFrequency(12345, 6)).toBe(0);
  });

  it('counts frequency of digit in negative integer', () => {
    expect(countDigitFrequency(-12345, 3)).toBe(1);
  });

  it('returns 0 when digit is not in negative integer', () => {
    expect(countDigitFrequency(-12345, 6)).toBe(0);
  });

  it('counts frequency of 0 in 0', () => {
    expect(countDigitFrequency(0, 0)).toBe(1);
  });

  it('returns 0 when digit is not in 0', () => {
    expect(countDigitFrequency(0, 1)).toBe(0);
  });

  it('counts frequency of digit in floating point number', () => {
    expect(() => countDigitFrequency(123.45, 3)).toThrow(
      'num must be an integer',
    );
  });

  it('returns 0 when digit is not in floating point number', () => {
    expect(() => countDigitFrequency(123.45, 6)).toThrow(
      'num must be an integer',
    );
  });
});
