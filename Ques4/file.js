const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const sourceDir = path.join(__dirname, 'text.zip');
const outputFile = path.join(__dirname, 'archive.zip');

const output = fs.createWriteStream(outputFile);
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level
    });
archive.pipe(output);

archive.directory(sourceDir, false);
archive.finalize();

output.on('close', () => {
    console.log(`Archive created successfully: ${archive.pointer()} total bytes`);
});
output.on('error', (err) => {
    console.error(`Error creating archive: ${err.message}`);
});
archive.on('error', (err) => {
    throw err;
});

