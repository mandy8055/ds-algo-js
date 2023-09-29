import reversePortion from '../reverse-portion';

describe('reversePortion', () => {
  it('should reverse the entire array when low and high are at the ends', () => {
    const arr = [1, 2, 3, 4, 5];
    reversePortion(arr, 0, arr.length - 1);
    expect(arr).toEqual([5, 4, 3, 2, 1]);
  });

  it('should reverse the portion of the array between low and high', () => {
    const arr = [1, 2, 3, 4, 5];
    reversePortion(arr, 1, 3);
    expect(arr).toEqual([1, 4, 3, 2, 5]);
  });

  it('should leave the array unchanged when low is greater than high', () => {
    const arr = [1, 2, 3, 4, 5];
    reversePortion(arr, 3, 1);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should leave the array unchanged when low and high are equal', () => {
    const arr = [1, 2, 3, 4, 5];
    reversePortion(arr, 2, 2);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should leave the array unchanged when it is empty', () => {
    const arr = [];
    reversePortion(arr, 0, 0);
    expect(arr).toEqual([]);
  });

  it('should leave the array unchanged when it has only one element', () => {
    const arr = [1];
    reversePortion(arr, 0, 0);
    expect(arr).toEqual([1]);
  });
});
