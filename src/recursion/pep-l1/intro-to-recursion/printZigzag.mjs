// This problem is usually important for predicting the output
function printZigzag(n) {
  let output = '';
  if (n === 0) {
    return output;
  }
  output += `${n} `;
  output += printZigzag(n - 1);
  output += `${n} `;
  output += printZigzag(n - 1);
  output += `${n} `;
  return output;
}

export default function printZigzagWrapper(n) {
  return printZigzag(n).trimEnd();
}
