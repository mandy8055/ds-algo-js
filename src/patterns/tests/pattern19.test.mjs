import pattern19 from '../pattern19.mjs';

describe('pattern19', () => {
  it('throws an error when n is even', () => {
    expect(() => pattern19(2)).toThrow('n must be odd');
  });

  it('returns correct pattern for n = 1', () => {
    const result = pattern19(1);
    expect(result).toEqual('*\t\n');
  });

  it('returns correct pattern for n = 3', () => {
    const result = pattern19(3);
    const expected = '*\t*\t*\t\n*\t*\t*\t\n*\t*\t*\t\n';
    expect(result).toEqual(expected);
  });

  it('returns correct pattern for n = 5', () => {
    const result = pattern19(5);
    const expected =
      '*\t*\t*\t\t*\t\n\t\t*\t\t*\t\n*\t*\t*\t*\t*\t\n*\t\t*\t\t\t\n*\t\t*\t*\t*\t\n';
    expect(result).toEqual(expected);
  });
  it('returns correct pattern for n = 7', () => {
    const result = pattern19(7);
    const expected =
      '*\t*\t*\t*\t\t\t*\t\n\t\t\t*\t\t\t*\t\n\t\t\t*\t\t\t*\t\n*\t*\t*\t*\t*\t*\t*\t\n*\t\t\t*\t\t\t\t\n*\t\t\t*\t\t\t\t\n*\t\t\t*\t*\t*\t*\t\n';
    expect(result).toEqual(expected);
  });
});
