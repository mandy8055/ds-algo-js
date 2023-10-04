import fibonacci from '../problem3.mjs';

describe('Fibonacci function', () => {
  it('should return 0 when n is 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('should return 1 when n is 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('should return correct Fibonacci number for n > 1', () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(10)).toBe(55);
  });

  it('should throw an error when n is negative', () => {
    expect(() => fibonacci(-1)).toThrow('Invalid input');
  });
});
