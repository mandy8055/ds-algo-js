import printIncreasing from '../printIncreasing.mjs';

describe('printIncreasing', () => {
  it('should return "1" when input is 1', () => {
    expect(printIncreasing(1)).toBe('1');
  });

  it('should return "1\n2" when input is 2', () => {
    expect(printIncreasing(2)).toBe('1\n2');
  });

  it('should return "1\n2\n3" when input is 3', () => {
    expect(printIncreasing(3)).toBe('1\n2\n3');
  });

  it('should return "1\n2\n3\n4\n5" when input is 5', () => {
    expect(printIncreasing(5)).toBe('1\n2\n3\n4\n5');
  });

  it('should throw an error when input is not a number', () => {
    expect(() => printIncreasing('a')).toThrow();
  });

  it('should throw an error when input is a negative number', () => {
    expect(() => printIncreasing(-1)).toThrow();
  });
});
