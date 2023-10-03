## ds-algo-js

This project is a collection of various data structures and algorithms implemented in JavaScript.

The `src` directory contains various subdirectories for different categories of problems, such as `algos`, `data_structures`, etc.

### Usage

To run a specific file with CLI input, use the following command:

```bash
# Using pnpm
pnpm run-file ./src/patterns/driver.mjs
# Using npm
npm run run-file ./src/patterns/driver.mjs
# Using yarn
yarn run-file ./src/patterns/driver.mjs
```

To run a specific file with file input, use the following command:

```bash
# Using pnpm
pnpm run-file src/2D-arrays/driver.mjs custom/inputFile.txt
# Using npm
npm run run-file src/2D-arrays/driver.mjs custom/inputFile.txt
# Using yarn
yarn run-file src/2D-arrays/driver.mjs custom/inputFile.txt
```

> The driver.mjs can be used to run the problems. This file is created just to separate the concerns. Also the input that is coming is in string format. So you need to manually type cast it if you're expecting a number for example.
> Array, 2D array inputs are provided line by line just as in [this file](custom/inputFile.txt).

### Commands

- `run-file`: Runs the file which matches the user provided path.
- `test`: Runs the Jest test suite. Uses `jest-html-reporters` module to display the unit test report along with coverages.

### License Information

For copyrights information, please review the **[License.](/LICENSE)**
