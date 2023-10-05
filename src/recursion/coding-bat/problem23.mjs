export default function count11(str) {
  // base case
  if (str.length <= 1) {
    return 0;
  }
  // main case
  if (str.startsWith('11')) {
    const restOfString = str.substring(2);
    return 1 + count11(restOfString);
  } else {
    const restOfString = str.substring(1);
    return count11(restOfString);
  }
}
