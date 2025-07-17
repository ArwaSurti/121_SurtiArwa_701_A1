// Display current filename and directory
console.log('Current directory:', __dirname);
console.log('Current file:', __filename);

// Using setTimeout to delay execution
setTimeout(() => {
  console.log('This message is shown after 2 seconds');
}, 2000);

// Using setInterval to repeat execution
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Interval count: ${counter}`);
  if (counter === 3) {
    clearInterval(intervalId);
    console.log('Interval cleared after 3 executions');
  }
}, 1000);

// Using process global
console.log('Process Platform:', process.platform);
console.log('Process ID:', process.pid);
console.log('Current working directory:', process.cwd());

// Exit after 5 seconds
setTimeout(() => {
  console.log('Exiting process...');
  process.exit(0);
}, 5000);
