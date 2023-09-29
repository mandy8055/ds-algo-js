import readline from 'readline';
import colors from 'colors';

function getInput(prompt) {
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

export default getInput;
