import printDecreasing from '../printDecreasing.mjs';

describe('printDecreasing', () => {
  it('should return "1" when input is 1', () => {
    expect(printDecreasing(1)).toBe('1');
  });

  it('should return "2\n1" when input is 2', () => {
    expect(printDecreasing(2)).toBe('2\n1');
  });

  it('should return "3\n2\n1" when input is 3', () => {
    expect(printDecreasing(3)).toBe('3\n2\n1');
  });

  it('should return "5\n4\n3\n2\n1" when input is 5', () => {
    expect(printDecreasing(5)).toBe('5\n4\n3\n2\n1');
  });

  it('should throw an error when input is not a number', () => {
    expect(() => printDecreasing('a')).toThrow();
  });

  it('should throw an error when input is a negative number', () => {
    expect(() => printDecreasing(-1)).toThrow();
  });
});
