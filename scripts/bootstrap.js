const { spawn } = require('child_process');

// Get the file from the command line arguments
const file = process.argv[2];

// Get the input file from the command line arguments
const inputFile = process.argv[3];

// Spawn a new node process with the file
const program = spawn('node', [file, inputFile], { stdio: 'inherit' });

program.on('close', (code) => {
  console.log(`Program exited with code ${code}`);
});
