import readline from 'readline';
import colors from 'colors';
import fs from 'fs';

let lines = [];
let lineIndex = 0;

function getInput(prompt = '') {
  if (process.argv[2] !== 'undefined') {
    // If an argument is provided, treat it as the path to the input file
    const filePath = process.argv[2];
    // If the lines array is empty, read the input from the file
    if (lines.length === 0) {
      const data = fs.readFileSync(filePath, 'utf8');
      lines = data.split('\n');
    }
    // Return the next line from the array
    return lines[lineIndex++];
  } else {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question(colors.green.bold(prompt), (input) => {
        rl.close();
        resolve(input);
      });
    });
  }
}

export default getInput;
