import rotateArray from '../rotate-an-array.mjs';

describe('rotateArray', () => {
  it('returns the same array when arr is empty', () => {
    expect(rotateArray([], 3)).toEqual([]);
  });

  it('returns the same array when arr has one element', () => {
    expect(rotateArray([1], 3)).toEqual([1]);
  });

  it('returns the same array when k is zero', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
  });

  it('returns the array rotated to the right by k positions when k is positive and less than arr.length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  it('returns the same array when k is positive and equal to arr.length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('returns the array rotated to the right by k mod arr.length positions when k is positive and greater than arr.length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 7)).toEqual([4, 5, 1, 2, 3]);
  });

  it('returns the array rotated to the left by abs(k) positions when k is negative and its absolute value is less than arr.length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], -2)).toEqual([3, 4, 5, 1, 2]);
  });

  it('returns the same array when k is negative and its absolute value is equal to arr.length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], -5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('returns the array rotated to the left by abs(k) mod arr.length positions when k is negative and its absolute value is greater than arr.length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], -7)).toEqual([3, 4, 5, 1, 2]);
  });
});
