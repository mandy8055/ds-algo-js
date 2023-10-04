export default function countHi(str = '') {
  // base case
  if (str.length <= 1) {
    return 0;
  }
  // main case
  // First way
  //   const temp = str.substring(0, 2) === 'hi' ? 1 : 0;
  //   const restOfString = str.substring(1);
  // Second way
  if (str.startsWith('hi')) {
    const restOfString = str.substring(2);
    return 1 + countHi(restOfString);
  } else {
    const restOfString = str.substring(1);
    return countHi(restOfString);
  }
}
