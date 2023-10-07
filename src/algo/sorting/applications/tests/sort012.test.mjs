import sort012 from '../sort012.mjs';

describe('sort012', () => {
  it('should sort an empty array', () => {
    const arr = [];
    sort012(arr);
    expect(arr).toEqual([]);
  });

  it('should sort an array with all 0s', () => {
    const arr = [0, 0, 0, 0, 0];
    sort012(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0]);
  });

  it('should sort an array with all 1s', () => {
    const arr = [1, 1, 1, 1, 1];
    sort012(arr);
    expect(arr).toEqual([1, 1, 1, 1, 1]);
  });

  it('should sort an array with all 2s', () => {
    const arr = [2, 2, 2, 2, 2];
    sort012(arr);
    expect(arr).toEqual([2, 2, 2, 2, 2]);
  });

  it('should sort an array with a mix of 0s, 1s, and 2s', () => {
    const arr = [2, 1, 0, 2, 1, 0, 2, 1, 0];
    sort012(arr);
    expect(arr).toEqual([0, 0, 0, 1, 1, 1, 2, 2, 2]);
  });
});
