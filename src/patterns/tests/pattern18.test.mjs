import pattern18 from '../pattern18.mjs';

describe('pattern18 function', () => {
  it('throws error when n is even', () => {
    expect(() => pattern18(2)).toThrow('n must be odd');
  });
  it('returns single asterisk when n is 1', () => {
    expect(pattern18(1)).toBe('*\t\n');
  });
  it('returns pattern when n is odd', () => {
    const expectedPattern =
      '*\t*\t*\t*\t*\t*\t*\t*\t*\t\n\t*\t\t\t\t\t\t*\t\n\t\t*\t\t\t\t*\t\n\t\t\t*\t\t*\t\n\t\t\t\t*\t\n\t\t\t*\t*\t*\t\n\t\t*\t*\t*\t*\t*\t\n\t*\t*\t*\t*\t*\t*\t*\t\n*\t*\t*\t*\t*\t*\t*\t*\t*\t\n';
    expect(pattern18(9)).toBe(expectedPattern);
  });
});
