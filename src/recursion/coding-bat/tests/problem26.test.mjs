import parenBit from '../problem26.mjs';

describe('parenBit function', () => {
  it('should return the string within the first pair of parentheses', () => {
    expect(parenBit('xyz(abc)123')).toBe('(abc)');
    expect(parenBit('x(hello)')).toBe('(hello)');
    expect(parenBit('(xy)1')).toBe('(xy)');
  });

  it('should return the parentheses if no characters are present in between', () => {
    expect(parenBit('()')).toBe('()');
  });

  it('should handle strings with spaces', () => {
    expect(parenBit('the (quick brown) fox')).toBe('(quick brown)');
  });

  it('should handle strings with special characters', () => {
    expect(parenBit('!@(#$%)^&*')).toBe('(#$%)');
  });
});
