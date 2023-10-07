import sort01 from '../sort01.mjs';

describe('sort01', () => {
  it('sorts an empty array', () => {
    const arr = [];
    sort01(arr);
    expect(arr).toEqual([]);
  });

  it('sorts an array with all 0s', () => {
    const arr = [0, 0, 0, 0];
    sort01(arr);
    expect(arr).toEqual([0, 0, 0, 0]);
  });

  it('sorts an array with all 1s', () => {
    const arr = [1, 1, 1, 1];
    sort01(arr);
    expect(arr).toEqual([1, 1, 1, 1]);
  });

  it('sorts an array with a mix of 0s and 1s', () => {
    const arr = [1, 0, 1, 0, 1, 0];
    sort01(arr);
    expect(arr).toEqual([0, 0, 0, 1, 1, 1]);
  });

  it('sorts an array with 0s at the beginning and 1s at the end', () => {
    const arr = [0, 0, 0, 1, 1, 1];
    sort01(arr);
    expect(arr).toEqual([0, 0, 0, 1, 1, 1]);
  });

  it('sorts an array with 1s at the beginning and 0s at the end', () => {
    const arr = [1, 1, 1, 0, 0, 0];
    sort01(arr);
    expect(arr).toEqual([0, 0, 0, 1, 1, 1]);
  });
});
