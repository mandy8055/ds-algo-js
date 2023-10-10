import printZigzagWrapper from '../printZigzag.mjs';

describe('printZigzagWrapper', () => {
  it('returns an empty string for input 0', () => {
    expect(printZigzagWrapper(0)).toBe('');
  });

  it('returns correct zigzag pattern for input 1', () => {
    expect(printZigzagWrapper(1)).toBe('1 1 1');
  });

  it('returns correct zigzag pattern for input 2', () => {
    expect(printZigzagWrapper(2)).toBe('2 1 1 1 2 1 1 1 2');
  });

  it('returns correct zigzag pattern for input 3', () => {
    expect(printZigzagWrapper(3)).toBe(
      '3 2 1 1 1 2 1 1 1 2 3 2 1 1 1 2 1 1 1 2 3',
    );
  });

  it('throws an error for negative inputs', () => {
    expect(() => printZigzagWrapper(-1)).toThrow();
  });

  it('throws an error for non-integer inputs', () => {
    expect(() => printZigzagWrapper(1.5)).toThrow();
    expect(() => printZigzagWrapper('a')).toThrow();
    expect(() => printZigzagWrapper(null)).toThrow();
  });
});
