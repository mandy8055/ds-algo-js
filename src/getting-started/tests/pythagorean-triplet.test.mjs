import isPythagoreanTriplet from '../pythagorean-triplet.mjs';

// Test suite
describe('isPythagoreanTriplet', () => {
  // Test case 1: Positive test case
  it('should return true if the given three numbers are Pythagorean triplets (a,b,c)', () => {
    expect(isPythagoreanTriplet(3, 4, 5)).toBe(true);
  });

  // Test case 2: Positive test case
  it('should return true if the given three numbers are Pythagorean triplets (b,c,a)', () => {
    expect(isPythagoreanTriplet(4, 5, 3)).toBe(true);
  });

  // Test case 3: Positive test case
  it('should return true if the given three numbers are Pythagorean triplets (c,a,b)', () => {
    expect(isPythagoreanTriplet(5, 3, 4)).toBe(true);
  });

  // Test case 4: Negative test case
  it('should return false if the given three numbers are not Pythagorean triplets', () => {
    expect(isPythagoreanTriplet(5, 7, 9)).toBe(false);
  });

  // Test case 5: Edge case
  it('should return false if any of the given three numbers is negative', () => {
    expect(isPythagoreanTriplet(-3, 4, 5)).toBe(false);
  });

  // Test case 6: Edge case
  it('should return false if any of the given three numbers is zero', () => {
    expect(isPythagoreanTriplet(3, 0, 5)).toBe(false);
  });
});
