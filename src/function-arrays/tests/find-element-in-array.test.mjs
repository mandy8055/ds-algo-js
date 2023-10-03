// Import the findElementInArray function
import findElementInArray from '../find-element-in-array.mjs';

describe('findElementInArray function', () => {
  // Test for a common case
  it('should return the index of an element in an array', () => {
    const arr = [4, 7, 2, 3, 9];
    const el = 2;
    expect(findElementInArray(arr, el)).toBe(2);
  });

  // Test to handle empty array input
  it('should return -1 when the array is empty', () => {
    expect(findElementInArray([], 1)).toBe(-1);
  });

  // Test to handle the element not present in the array
  it('should return -1 when the element is not present in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const el = 10;
    expect(findElementInArray(arr, el)).toBe(-1);
  });

  // Test to handle first element in the array
  it('should return 0 (the index) if element is the first in the array', () => {
    const arr = [5, 3, 1];
    const el = 5;
    expect(findElementInArray(arr, el)).toBe(0);
  });

  // Test to handle last element in the array
  it('should return the correct index if the element is the last in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const el = 6;
    expect(findElementInArray(arr, el)).toBe(5);
  });
});
