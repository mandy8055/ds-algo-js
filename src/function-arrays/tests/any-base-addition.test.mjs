import anyBaseAddition from '../any-base-addition.mjs';

describe('anyBaseAddition', () => {
  test('should add two numbers in base 10', () => {
    expect(anyBaseAddition(123, 456, 10)).toBe(579);
  });

  test('should add two numbers in base 2', () => {
    expect(anyBaseAddition(101, 110, 2)).toBe(1011);
  });

  test('should add two numbers in base 8', () => {
    expect(anyBaseAddition(123, 456, 8)).toBe(601);
  });

  test('should handle carry over', () => {
    expect(anyBaseAddition(99, 1, 10)).toBe(100);
  });

  test('should handle zero as input', () => {
    expect(anyBaseAddition(0, 123, 10)).toBe(123);
    expect(anyBaseAddition(123, 0, 10)).toBe(123);
  });

  test('should handle negative numbers', () => {
    expect(() => anyBaseAddition(-123, 123, 10)).toThrow();
  });

  test('should handle large numbers', () => {
    expect(anyBaseAddition(999999999, 1, 10)).toBe(1000000000);
  });
});
