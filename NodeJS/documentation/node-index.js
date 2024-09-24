const { exec } = require('child_process');
const child = exec('node --version', (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});