export default function countDigitFrequency(num, digit) {
  if (!Number.isInteger(num)) {
    throw new Error('num must be an integer');
  } else if (num === 0 && digit === 0) {
    return 1;
  }
  // Method 1: Utilizing javascript rich library of methods.
  //   return num
  //     .toString()
  //     .split('')
  //     .filter((el) => +el === digit).length;

  let count = 0;
  num = Math.abs(num);
  while (num > 0) {
    if (num % 10 === digit) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  return count;
}
