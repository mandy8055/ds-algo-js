import anyBaseToDecimal from '../any-base-to-decimal.mjs';

describe('anyBaseToDecimal', () => {
  it('converts single digit number with base 2 to decimal', () => {
    expect(anyBaseToDecimal(1, 2)).toBe(1);
  });

  it('converts multiple digit number with base 2 to decimal', () => {
    expect(anyBaseToDecimal(101, 2)).toBe(5);
  });

  it('converts single digit number with base 10 to decimal', () => {
    expect(anyBaseToDecimal(5, 10)).toBe(5);
  });

  it('converts multiple digit number with base 10 to decimal', () => {
    expect(anyBaseToDecimal(123, 10)).toBe(123);
  });

  it('converts single digit number with base 5 to decimal', () => {
    expect(anyBaseToDecimal(3, 5)).toBe(3);
  });

  it('converts multiple digit number with base 5 to decimal', () => {
    expect(anyBaseToDecimal(432, 5)).toBe(117);
  });

  it('throws error when number contains digits not valid for the base', () => {
    expect(() => anyBaseToDecimal(102, 2)).toThrow();
  });

  it('converts zero correctly', () => {
    expect(anyBaseToDecimal(0, 2)).toBe(0);
  });

  it('converts negative numbers correctly', () => {
    expect(anyBaseToDecimal(-101, 2)).toBe(-5);
  });
});
