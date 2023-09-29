import pattern8 from '../pattern8.mjs';

describe('pattern8', () => {
  it('returns correct pattern for positive integer', () => {
    const result = pattern8(5);
    expect(result).toBe(
      ' \t \t \t \t*\t\n \t \t \t*\t \t\n \t \t*\t \t \t\n \t*\t \t \t \t\n*\t \t \t \t \t\n',
    );
  });

  it('returns empty string for zero', () => {
    const result = pattern8(0);
    expect(result).toBe('');
  });

  it('throws error for negative integer', () => {
    expect(() => pattern8(-5)).toThrow('n should be positive or integer');
  });

  it('throws error for non-integer', () => {
    expect(() => pattern8(1.5)).toThrow('n should be positive or integer');
  });
});
