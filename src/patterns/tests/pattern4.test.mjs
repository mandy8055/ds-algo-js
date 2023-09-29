import pattern4 from '../pattern4.mjs';

describe('pattern4 function', () => {
  it('should return a correct pattern for input of 1', () => {
    const expectedPattern = '*\t\n';
    expect(pattern4(1)).toBe(expectedPattern);
  });

  it('should return a correct pattern for input of 3', () => {
    const expectedPattern = '*\t*\t*\t\n \t*\t*\t\n \t \t*\t\n';
    expect(pattern4(3)).toBe(expectedPattern);
  });

  it('should return a correct pattern for input of 5', () => {
    const expectedPattern =
      '*\t*\t*\t*\t*\t\n \t*\t*\t*\t*\t\n \t \t*\t*\t*\t\n \t \t \t*\t*\t\n \t \t \t \t*\t\n';
    expect(pattern4(5)).toBe(expectedPattern);
  });
});
