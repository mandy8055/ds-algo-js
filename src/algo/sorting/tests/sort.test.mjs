import bubbleSort from '../bubbleSort.mjs';
import insertionSort from '../insertionSort.mjs';
import mergeSort from '../mergeSort.mjs';
import quickSort from '../quickSort.mjs';
import selectionSort from '../selectionSort.mjs';

const sortingAlgorithms = [
  { name: 'Insertion Sort', sort: insertionSort },
  { name: 'Bubble Sort', sort: bubbleSort },
  { name: 'Selection Sort', sort: selectionSort },
  { name: 'Quick Sort', sort: quickSort },
  { name: 'Merge Sort', sort: mergeSort },
];

describe('Sorting Algorithms', () => {
  sortingAlgorithms.forEach(({ name, sort }) => {
    describe(name, () => {
      it('sorts an array of numbers', () => {
        const input = [5, 2, 4, 6, 1, 3];
        const output = [1, 2, 3, 4, 5, 6];
        sort(input);
        expect(input).toEqual(output);
      });

      it('sorts an array of numbers with duplicates', () => {
        const input = [5, 2, 4, 2, 1, 3];
        const output = [1, 2, 2, 3, 4, 5];
        sort(input);
        expect(input).toEqual(output);
      });

      it('sorts an array of one element', () => {
        const input = [1];
        const output = [1];
        sort(input);
        expect(input).toEqual(output);
      });

      it('sorts an empty array', () => {
        const input = [];
        const output = [];
        sort(input);
        expect(input).toEqual(output);
      });
    });
  });
});
