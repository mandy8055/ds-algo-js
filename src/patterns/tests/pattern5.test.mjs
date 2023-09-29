import pattern5 from '../pattern5.mjs';

describe('pattern5 function', () => {
  it('returns correct pattern for n = 3', () => {
    const expectedPattern3 = ' \t*\t\n*\t*\t*\t\n \t*\t\n';
    expect(pattern5(3)).toBe(expectedPattern3);
  });
  it('should return an error message for even inputs', () => {
    expect(pattern5(4)).toBe('n must be odd');
  });

  it('should return a correct pattern for an odd input of 5', () => {
    const expectedPattern5 =
      ' \t \t*\t\n \t*\t*\t*\t\n*\t*\t*\t*\t*\t\n \t*\t*\t*\t\n \t \t*\t\n';
    expect(pattern5(5)).toBe(expectedPattern5);
  });

  it('should return a correct pattern for an odd input of 7', () => {
    const expectedPattern7 =
      ' \t \t \t*\t\n \t \t*\t*\t*\t\n \t*\t*\t*\t*\t*\t\n*\t*\t*\t*\t*\t*\t*\t\n \t*\t*\t*\t*\t*\t\n \t \t*\t*\t*\t\n \t \t \t*\t\n';
    expect(pattern5(7)).toBe(expectedPattern7);
  });
});
