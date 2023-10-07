import countHi2 from '../problem25.mjs';

describe('countHi2 function', () => {
  it('should return 0 for empty string', () => {
    expect(countHi2('')).toBe(0);
  });

  it('should return 0 for string without "hi"', () => {
    expect(countHi2('hello')).toBe(0);
  });

  it('should return 1 for string with single "hi"', () => {
    expect(countHi2('hi')).toBe(1);
  });

  it('should return 2 for string with two "hi"', () => {
    expect(countHi2('hihi')).toBe(2);
  });

  it('should return 0 for string with "xhi"', () => {
    expect(countHi2('xhi')).toBe(0);
  });

  it('should return 1 for string with "hi" and "xhi"', () => {
    expect(countHi2('hixhi')).toBe(1);
  });

  it('should return 2 for string with "hi", "xhi" and "hi"', () => {
    expect(countHi2('hixhihi')).toBe(2);
  });
});
