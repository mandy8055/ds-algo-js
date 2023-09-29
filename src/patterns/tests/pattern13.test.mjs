import pattern13 from '../pattern13.mjs';

describe('pattern13', () => {
  it('returns an empty string when n is 0', () => {
    expect(pattern13(0)).toBe('');
  });

  it('returns "1\\n" when n is 1', () => {
    expect(pattern13(1)).toBe('1\t\n');
  });

  it('returns the correct pattern when n is greater than 1', () => {
    const expectedPattern = '1\t\n1\t1\t\n1\t2\t1\t\n1\t3\t3\t1\t\n';
    expect(pattern13(4)).toBe(expectedPattern);
  });

  it('throws an error when n is a negative number', () => {
    expect(() => pattern13(-1)).toThrow();
  });
});
