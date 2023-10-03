import getInput from '../../scripts/getInput.mjs';
import logger from '../../scripts/logger.mjs';
import factorial from './problem1.mjs';
import bunnyEars from './problem2.mjs';

(async function main() {
  const n = parseInt(await getInput('Enter a number '));
  //   logger(factorial(n));
  logger(bunnyEars(n));
})();
