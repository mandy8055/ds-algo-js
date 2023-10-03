import convertTo2D from '../convert-1d-to-2d.mjs';

describe('convertTo2D', () => {
  it('should convert a 1D array to a 2D array', () => {
    const array1D = [1, 2, 3, 4, 5, 6];
    const m = 2;
    const n = 3;
    const expected = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(convertTo2D(array1D, m, n)).toEqual(expected);
  });

  it('should return an empty array if m*n is not equal to the length of the array', () => {
    const array1D = [1, 2, 3, 4, 5];
    const m = 2;
    const n = 3;
    const expected = [];
    expect(convertTo2D(array1D, m, n)).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const array1D = [];
    const m = 2;
    const n = 3;
    const expected = [];
    expect(convertTo2D(array1D, m, n)).toEqual(expected);
  });
});
