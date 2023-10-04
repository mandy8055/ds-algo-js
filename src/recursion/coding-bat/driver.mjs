import inputArray from '../../../other/input-arr.mjs';
import getInput from '../../../scripts/getInput.mjs';
import logger from '../../../scripts/logger.mjs';
import factorial from './problem1.mjs';
import countX from './problem10.mjs';
import countHi from './problem11.mjs';
import changeXY from './problem12.mjs';
import changePi from './problem13.mjs';
import array6 from './problem15.mjs';
import allStar from './problem18.mjs';
import pairStar from './problem19.mjs';
import bunnyEars from './problem2.mjs';
import endX from './problem20.mjs';
import fibonacci from './problem3.mjs';
import triangle from './problem5.mjs';
import sumDigits from './problem6.mjs';
import count7 from './problem7.mjs';

(async function main() {
  // const n = parseInt(await getInput('Enter a number '));
  const str = await getInput('Enter a string ');
  // const nums = await inputArray();
  //   logger(factorial(n));
  // logger(array6(nums, 0));
  logger(endX(str));
})();
