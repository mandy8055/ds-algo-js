export default function countAbc(str) {
  // base case
  if (str.length <= 2) {
    return 0;
  }
  // main case
  if (str.startsWith('abc') || str.startsWith('aba')) {
    const restOfString = str.substring(2);
    return 1 + countAbc(restOfString);
  } else {
    const restOfString = str.substring(1);
    return countAbc(restOfString);
  }
}
