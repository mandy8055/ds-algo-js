import triangle from '../problem5.mjs';

describe('triangle function', () => {
  it('should return 0 when input is 0', () => {
    expect(triangle(0)).toBe(0);
  });

  it('should return 1 when input is 1', () => {
    expect(triangle(1)).toBe(1);
  });

  it('should return 3 when input is 2', () => {
    expect(triangle(2)).toBe(3);
  });

  it('should return 6 when input is 3', () => {
    expect(triangle(3)).toBe(6);
  });

  it('should return 10 when input is 4', () => {
    expect(triangle(4)).toBe(10);
  });

  it('should throw an error when input is less than 0', () => {
    expect(() => triangle(-1)).toThrow('Invalid input');
  });
});
