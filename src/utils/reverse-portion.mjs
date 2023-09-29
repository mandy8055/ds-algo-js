export default function reversePortion(arr, low, high) {
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    high--;
    low++;
  }
}
