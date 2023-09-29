import rotateANumber from '../rotate-a-number.mjs';

describe('rotateANumber', () => {
  it('should return 123 for n=123 and k=0', () => {
    expect(rotateANumber(123, 0)).toBe(123);
  });

  it('should return 321 for n=123 and k=1', () => {
    expect(rotateANumber(123, 1)).toBe(312);
  });

  it('should return 23 for n=123 and k=2', () => {
    expect(rotateANumber(123, 2)).toBe(231);
  });

  it('should return 34512 for n=12345 and k=-2', () => {
    expect(rotateANumber(12345, -2)).toBe(34512);
  });

  it('should return 12345 for n=12345 and k=5', () => {
    expect(rotateANumber(12345, 5)).toBe(12345);
  });

  it('should return 456123 for n=123456 and k=3', () => {
    expect(rotateANumber(123456, 3)).toBe(456123);
  });

  it('should return 456123 for n=123456 and k=-3', () => {
    expect(rotateANumber(123456, -3)).toBe(456123);
  });
});
