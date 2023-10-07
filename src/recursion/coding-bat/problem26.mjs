/**
 * @param {*} str str will definitely contains exactly one parenthesis pair
 * @returns string
 */

export default function parenBit(str) {
  // base case
  const ch = str.charAt(0);
  if (ch === ')') {
    return ch;
  }
  // main case
  const restOfString = str.substring(1);
  if (ch === '(' || !str.includes('(')) {
    return ch + parenBit(restOfString);
  } else {
    return parenBit(restOfString);
  }
}
