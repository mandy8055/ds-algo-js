import get2DArray from '../../other/input-2d.mjs';
import getInput from '../../scripts/getInput.mjs';
import logger from '../../scripts/logger.mjs';
import ringRotate from './ring-rotate.mjs';
// import matrixMultiplication from './matrix-multiplication.mjs';
// import spiralTraversal from './spiral-traversal.mjs';
// import waveTraversal from './wave-traversal.mjs';

(async function main() {
  const shell = parseInt(await getInput('Enter shell '));
  const rotations = parseInt(await getInput('Enter rotations '));
  const mat1 = await get2DArray();
  logger(ringRotate(mat1, shell, rotations));
})();
