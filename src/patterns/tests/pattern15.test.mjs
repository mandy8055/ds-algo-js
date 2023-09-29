// Import dependencies
import pattern15 from '../pattern15.mjs';

describe('pattern15', () => {
  it('throws error for non-negative non-integer even values', () => {
    expect(() => pattern15(1.5)).toThrow('n must be odd positive integer');
    expect(() => pattern15(-1)).toThrow('n must be odd positive integer');
    expect(() => pattern15(2)).toThrow('n must be odd positive integer');
  });

  it('returns correct pattern for n=3', () => {
    const expectedPattern = ' \t1\t\n2\t1\t2\t\n \t1\t\n';
    expect(pattern15(3)).toBe(expectedPattern);
  });

  it('returns correct pattern for n=5', () => {
    const expectedPattern =
      ' \t \t1\t\n \t2\t1\t2\t\n3\t2\t3\t2\t3\t\n \t2\t1\t2\t\n \t \t1\t\n';
    expect(pattern15(5)).toBe(expectedPattern);
  });
});
