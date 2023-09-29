import pattern17 from '../pattern17.mjs';

describe('pattern17 function', () => {
  it('should generates correct pattern when n is odd and greater than 1', () => {
    expect(pattern17(5)).toBe(
      '\t\t*\t\n\t\t*\t*\t\n*\t*\t*\t*\t*\t\n\t\t*\t*\t\n\t\t*\t\n',
    );
  });

  it('should throw an error when n is even', () => {
    expect(() => pattern17(4)).toThrow(Error('n must be odd'));
  });

  it('should generate correct pattern when n = 1', () => {
    expect(pattern17(1)).toBe('*\t\n');
  });
});
