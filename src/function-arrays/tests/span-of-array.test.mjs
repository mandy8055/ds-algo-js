import spanOfArray from '../span-of-array.mjs';

describe('spanOfArray', () => {
  it('returns the correct span for an array with multiple elements', () => {
    const arr = [3, 5, 8, 1, 9];
    const result = spanOfArray(arr);
    expect(result).toEqual(8); // The maximum is 9 and the minimum is 1. The span should be 9 - 1 = 8.
  });

  it('returns 0 for an array with a single element', () => {
    const arr = [5];
    const result = spanOfArray(arr);
    expect(result).toEqual(0); // The maximum and the minimum are the same. The span should be 0.
  });

  it('throws an error for an empty array', () => {
    const arr = [];
    // We expect an error to be thrown, so we wrap the call in a function.
    expect(() => spanOfArray(arr)).toThrow(
      'Array must contain at least one element',
    );
  });

  it('returns the correct span for an array with negative numbers', () => {
    const arr = [3, -5, 8, -1, 9];
    const result = spanOfArray(arr);
    expect(result).toEqual(14); // The maximum is 9 and the minimum is -5. The span should be 9 - (-5) = 14.
  });
});
