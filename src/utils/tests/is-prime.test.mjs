import isPrime from '../is-prime';

describe('isPrime', () => {
  it('returns false for numbers less than or equal to 1', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  it('returns true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(23)).toBe(true);
  });

  it('returns false for composite numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(14)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(21)).toBe(false);
    expect(isPrime(27)).toBe(false);
  });

  it('returns true for large prime numbers', () => {
    expect(isPrime(2147483647)).toBe(true);
    expect(isPrime(982451653)).toBe(true);
    expect(isPrime(32416190071)).toBe(true);
    expect(isPrime(1000000007)).toBe(true);
  });

  it('returns false for large composite numbers', () => {
    expect(isPrime(1000000008)).toBe(false);
    expect(isPrime(2147483646)).toBe(false);
  });

  it('handles edge cases', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(1000000000)).toBe(false);
    expect(isPrime(1000000007)).toBe(true);
  });
});
