// runProgram.js
const { spawn } = require('child_process');

// Get the file from the command line arguments
const file = process.argv[2];

// Spawn a new node process with the file
const program = spawn('node', [file], { stdio: 'inherit' });

program.on('close', (code) => {
  console.log(`Program exited with code ${code}`);
});
