export default function countX(str) {
  // base case
  if (str.length === 0) {
    return 0;
  }
  // main case
  const temp = str.charAt(0) === 'x' ? 1 : 0;
  const restOfString = str.substring(1);
  return temp + countX(restOfString);
}
