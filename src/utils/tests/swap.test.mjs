import swap from '../swap';

describe('swap', () => {
  it('swaps elements in an array', () => {
    const arr = [1, 2, 3, 4, 5];
    swap(arr, 0, 4);
    expect(arr).toEqual([5, 2, 3, 4, 1]);
  });

  it('swaps elements in an array with duplicates', () => {
    const arr = [1, 2, 2, 4, 1];
    swap(arr, 1, 3);
    expect(arr).toEqual([1, 4, 2, 2, 1]);
  });

  it('swaps the same element', () => {
    const arr = [1, 2, 3, 4, 5];
    swap(arr, 2, 2);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});
