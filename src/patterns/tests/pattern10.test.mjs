import pattern10 from '../pattern10.mjs';

describe('Tests for pattern10 function', () => {
  it('should throw an error for even numbers', () => {
    expect(() => {
      pattern10(2);
    }).toThrow('n has to be odd positive integer.');
  });

  it('should throw an error for negative numbers', () => {
    expect(() => {
      pattern10(-1);
    }).toThrow('n has to be odd positive integer.');
  });

  it('should throw an error for non-integer numbers', () => {
    expect(() => {
      pattern10(1.5);
    }).toThrow('n has to be odd positive integer.');
  });

  it('should return expected pattern for n=1', () => {
    const expectedPattern = `*\t\n`;
    expect(pattern10(1)).toEqual(expectedPattern);
  });

  it('should return expected pattern for n=3', () => {
    const expectedPattern = ' \t*\t\n*\t \t*\t\n \t*\t\n';
    expect(pattern10(3)).toEqual(expectedPattern);
  });

  it('should return expected pattern for n=5', () => {
    const expectedPattern =
      ' \t \t*\t\n \t*\t \t*\t\n*\t \t \t \t*\t\n \t*\t \t*\t\n \t \t*\t\n';
    expect(pattern10(5)).toEqual(expectedPattern);
  });
});
