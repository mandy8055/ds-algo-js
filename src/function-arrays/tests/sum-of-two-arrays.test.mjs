import sumOfTwoArrays from '../sum-of-two-arrays.mjs';

describe('sumOfTwoArrays', () => {
  it('returns an empty array when both input arrays are empty', () => {
    expect(sumOfTwoArrays([], [])).toEqual([]);
  });

  it('returns the non-empty array when one input array is empty', () => {
    expect(sumOfTwoArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(sumOfTwoArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('returns the sum of common length and leaves the remaining elements of the longer array as is when arrays have different lengths', () => {
    expect(sumOfTwoArrays([1, 2, 3], [1, 2, 3, 4])).toEqual([2, 4, 6, 4]);
    expect(sumOfTwoArrays([1, 2, 3, 4], [1, 2, 3])).toEqual([2, 4, 6, 4]);
  });

  it('correctly adds the negative numbers when arrays have negative numbers', () => {
    expect(sumOfTwoArrays([-1, -2, -3], [-1, -2, -3])).toEqual([-2, -4, -6]);
  });

  it('correctly adds the floating point numbers when arrays have floating point numbers', () => {
    expect(sumOfTwoArrays([1.1, 2.2, 3.3], [1.1, 2.2, 3.3])).toEqual([
      2.2, 4.4, 6.6,
    ]);
  });
});
