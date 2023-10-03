import waveTraversal from '../wave-traversal.mjs';

describe('waveTraversal', () => {
  it('should return correct wave traversal for a 2D array', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const output = waveTraversal(input);
    expect(output).toEqual([1, 4, 7, 8, 5, 2, 3, 6, 9]);
  });

  it('should return an empty array for an empty input', () => {
    const input = [];
    const output = waveTraversal(input);
    expect(output).toEqual([]);
  });
});
