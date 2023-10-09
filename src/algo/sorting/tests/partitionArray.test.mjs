import partitionArray from '../partitionArray.mjs';

describe('partitionArray', () => {
  it('handles empty array', () => {
    const arr = [];
    const pivot = 0;
    const low = 0;
    const high = arr.length - 1;
    const result = partitionArray(arr, pivot, low, high);
    expect(result.array).toEqual([]);
    expect(result.pivotIndex).toEqual(-1);
  });

  it('handles array with one element', () => {
    const arr = [1];
    const pivot = 1;
    const low = 0;
    const high = arr.length - 1;
    const result = partitionArray(arr, pivot, low, high);
    expect(result.array).toEqual([1]);
    expect(result.pivotIndex).toEqual(0);
  });

  it('handles array with multiple elements', () => {
    const arr = [5, 2, 4, 6, 1, 3];
    const pivot = 3;
    const low = 0;
    const high = arr.length - 1;
    const result = partitionArray(arr, pivot, low, high);
    expect(result.array).toEqual([2, 1, 3, 6, 5, 4]);
    expect(result.pivotIndex).toEqual(2);
  });

  it('handles array with all elements equal to pivot', () => {
    const arr = [3, 3, 3, 3, 3];
    const pivot = 3;
    const low = 0;
    const high = arr.length - 1;
    const result = partitionArray(arr, pivot, low, high);
    expect(result.array).toEqual([3, 3, 3, 3, 3]);
    expect(result.pivotIndex).toEqual(4);
  });
});
