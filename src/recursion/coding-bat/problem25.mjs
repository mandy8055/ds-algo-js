export default function countHi2(str) {
  // base case
  if (str.length <= 1) {
    return 0;
  }
  // main case
  const substr1 = str.substring(1);
  const substr2 = str.substring(2);
  if (str.startsWith('hi')) {
    return 1 + countHi2(substr2);
  }
  if (str.charAt(0) === 'x') {
    if (substr1.startsWith('hi')) {
      return countHi2(substr2);
    } else {
      return countHi2(substr1);
    }
  } else {
    return countHi2(substr1);
  }
}
