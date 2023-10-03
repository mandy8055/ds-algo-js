import ringRotate from '../ring-rotate.mjs';

describe('ringRotate', () => {
  test('should return the same array when rotations is 0', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const output = ringRotate(input, 1, 0);
    expect(output).toEqual(input);
  });

  test('should correctly rotate the outer shell', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expectedOutput = [
      [2, 3, 6],
      [1, 5, 9],
      [4, 7, 8],
    ];
    const output = ringRotate(input, 1, 1);
    expect(output).toEqual(expectedOutput);
  });

  test('should correctly rotate the inner shell', () => {
    const input = [
      [11, 12, 13, 14, 15, 16, 17],
      [21, 22, 23, 24, 25, 26, 27],
      [31, 32, 33, 34, 35, 36, 37],
      [41, 42, 43, 44, 45, 46, 47],
      [51, 52, 53, 54, 55, 56, 57],
    ];
    const expectedOutput = [
      [11, 12, 13, 14, 15, 16, 17],
      [21, 25, 26, 36, 46, 45, 27],
      [31, 24, 33, 34, 35, 44, 37],
      [41, 23, 22, 32, 42, 43, 47],
      [51, 52, 53, 54, 55, 56, 57],
    ];
    const output = ringRotate(input, 2, 3);
    expect(output).toEqual(expectedOutput);
  });
});
