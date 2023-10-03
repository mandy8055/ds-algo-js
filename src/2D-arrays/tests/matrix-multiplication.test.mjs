import matrixMultiplication from '../matrix-multiplication.mjs';

describe('matrixMultiplication', () => {
  it('should multiply two matrices correctly', () => {
    let mat1 = [
      [10, 0, 0],
      [0, 20, 0],
    ];
    let mat2 = [
      [1, 0, 1, 0],
      [0, 1, 1, 2],
      [1, 1, 0, 0],
    ];
    const expected = [
      [10, 0, 10, 0],
      [0, 20, 20, 40],
    ];
    expect(matrixMultiplication(mat1, mat2)).toEqual(expected);
  });

  it('should return an empty array when both input arrays are empty', () => {
    expect(matrixMultiplication([], [])).toEqual([]);
  });

  it('should throw an error when the number of columns in the first matrix does not match the number of rows in the second matrix', () => {
    const arr1 = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const arr2 = [
      [1, 2],
      [3, 4],
    ];
    expect(() => matrixMultiplication(arr1, arr2)).toThrow();
  });
});
