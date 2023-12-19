import inputArray from './input-arr.mjs';
import getInput from '../scripts/getInput.mjs';
import logger from '../scripts/logger.mjs';
import convertTo2D from '../src/2D-arrays/convert-1d-to-2d.mjs';

export default async function get2DArray() {
  const rows = parseInt(await getInput('Enter number of rows '));
  const cols = parseInt(await getInput('Enter number of columns '));
  if (process.argv[2] === 'undefined') {
    logger(`Enter ${rows * cols} elements`, { color: 'green' });
  }
  const input2D = await inputArray(rows * cols);
  return convertTo2D(input2D, rows, cols);
}
