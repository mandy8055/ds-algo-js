import spiralTraversal from '../spiral-traversal.mjs';

describe('spiralTraversal', () => {
  it('should return correct spiral traversal for a square 2D array', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const output = spiralTraversal(input);
    expect(output).toEqual([1, 4, 7, 8, 9, 6, 3, 2, 5]);
  });

  it('should return correct spiral traversal for a rectangular 2D array', () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const output = spiralTraversal(input);
    expect(output).toEqual([1, 5, 9, 10, 11, 12, 8, 4, 3, 2, 6, 7]);
  });

  it('should return an empty array for an empty input', () => {
    const input = [];
    const output = spiralTraversal(input);
    expect(output).toEqual([]);
  });
});
