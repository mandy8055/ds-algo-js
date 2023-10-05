export default function countPairs(str) {
  // Base case
  if (str.length <= 2) {
    return 0;
  }
  // Main case
  const temp = str.charAt(0) === str.charAt(2) ? 1 : 0;
  const restOfString = str.substring(1);
  return temp + countPairs(restOfString);
}
