export default function findElementInArray(arr, el) {
  //   return arr.findIndex((ell) => ell === el);

  let index = -1;
  for (let [i, v] of arr.entries()) {
    if (v === el) {
      index = i;
      break;
    }
  }
  return index;
}
