import pattern14 from '../pattern14.mjs';

describe('Testing pattern14 function', () => {
  it('should throw an error for numbers less than 1', () => {
    expect(() => pattern14(0)).toThrow(Error);
    expect(() => pattern14(-3)).toThrow(Error);
  });

  it('should return the correct multiplication table for number 2', () => {
    const result =
      '2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n2 * 4 = 8\n2 * 5 = 10\n2 * 6 = 12\n2 * 7 = 14\n2 * 8 = 16\n2 * 9 = 18\n2 * 10 = 20\n';
    expect(pattern14(2)).toEqual(result);
  });
});
