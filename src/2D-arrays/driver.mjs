import get2DArray from '../../other/input-2d.mjs';
import getInput from '../../scripts/getInput.mjs';
import logger from '../../scripts/logger.mjs';
import matrixMultiplication from './matrix-multiplication.mjs';
import ringRotate from './ring-rotate.mjs';
import spiralTraversal from './spiral-traversal.mjs';
import waveTraversal from './wave-traversal.mjs';

(async function main() {
  const shell = await getInput(
    'Enter shell number for anti-clockwise rotations ',
  );
  const rotations = await getInput('Enter number of rotations ');
  const mat1 = await get2DArray();
  logger(ringRotate(mat1, shell, rotations));
})();
