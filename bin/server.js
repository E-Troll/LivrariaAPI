const { join } = require('path');
const { existsSync, mkdirSync } = require('fs');
const { spawn } = require('child_process');

const rootDir = join(__dirname, '..');
const srcDir = join(rootDir, 'src');
const clientDir = join(rootDir, 'client');

// Ensure the 'dist' folder exists for the Angular build
const distDir = join(clientDir, 'dist', 'my-book-app');
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Start the Angular development server
const ngServeProcess = spawn('ng', ['serve', '--port', '4200'], {
  cwd: clientDir,
  stdio: 'inherit',
});

// Start the NestJS server
const nestProcess = spawn('node', ['src/app.js'], {
  cwd: rootDir,
  stdio: 'inherit',
});

// Handle process termination
process.on('SIGINT', () => {
  ngServeProcess.kill('SIGINT');
  nestProcess.kill('SIGINT');
  process.exit(0);
});
