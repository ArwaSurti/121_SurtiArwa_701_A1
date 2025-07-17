const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

// Path to the ZIP file
const zipPath = path.join(__dirname, 'sample.zip'); // Adjust the path as needed
const extractTo = path.join(__dirname, 'extracted'); // Destination folder

// Ensure the output folder exists
if (!fs.existsSync(extractTo)) {
    fs.mkdirSync(extractTo);
}

// Extract the ZIP file
fs.createReadStream(zipPath)
  .pipe(unzipper.Extract({ path: extractTo }))
  .on('close', () => {
    console.log('ZIP file extracted successfully to:', extractTo);
  })
  .on('error', (err) => {
    console.error('Error during extraction:', err);
  });