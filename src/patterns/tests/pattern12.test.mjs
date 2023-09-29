import pattern12 from '../pattern12.mjs';

describe('printFibonacciTillN', () => {
  test('should throw error with zero input', () => {
    expect(() => {
      pattern12(0);
    }).toThrow('Invalid input');
  });

  test('should throw error with negative input', () => {
    expect(() => {
      pattern12(-5);
    }).toThrow('Invalid input');
  });

  test('should return correct pattern string', () => {
    const result = pattern12(5);
    const expected =
      '0\t\n1\t1\t\n2\t3\t5\t\n8\t13\t21\t34\t\n55\t89\t144\t233\t377\t\n';
    expect(result).toBe(expected);
  });
});
