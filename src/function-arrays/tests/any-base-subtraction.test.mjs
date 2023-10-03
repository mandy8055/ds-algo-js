import anyBaseSubtraction from '../any-base-subtraction.mjs';

describe('anyBaseSubtraction', () => {
  test('num1 is greater than num2, base is 2', () => {
    expect(anyBaseSubtraction(100, 10, 2)).toBe(10);
  });

  test('num1 is greater than num2, base is 5', () => {
    expect(anyBaseSubtraction(12, 3, 5)).toBe(4);
  });

  test('num1 is greater than num2, base is 10', () => {
    expect(anyBaseSubtraction(9, 4, 10)).toBe(5);
  });

  test('num1 is much greater than num2, base is 10', () => {
    expect(anyBaseSubtraction(100, 25, 10)).toBe(75);
  });

  test('num1 is much greater than num2, base is 2', () => {
    expect(anyBaseSubtraction(1100100, 11001, 2)).toBe(1001011);
  });

  test('num1 is much greater than num2, base is 5', () => {
    expect(anyBaseSubtraction(400, 100, 5)).toBe(300);
  });
});
