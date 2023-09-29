import pattern9 from '../pattern9.mjs';

describe('pattern9', () => {
  it('returns correct pattern for positive integer', () => {
    const result = pattern9(5);
    expect(result).toBe(
      '*\t \t \t \t*\t\n \t*\t \t*\t \t\n \t \t*\t \t \t\n \t*\t \t*\t \t\n*\t \t \t \t*\t\n',
    );
  });

  it('returns empty string for zero', () => {
    const result = pattern9(0);
    expect(result).toBe('');
  });

  it('throws error for negative integer', () => {
    expect(() => {
      pattern9(-1);
    }).toThrow('n should be positive integer');
  });

  it('throws error for non-integer number', () => {
    expect(() => {
      pattern9(1.5);
    }).toThrow('n should be positive integer');
  });
});
