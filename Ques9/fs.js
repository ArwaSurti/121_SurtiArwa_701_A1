const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// 1. Write to file
fs.writeFile(filePath, 'This is the first line.\n', (err) => {
  if (err) throw err;
  console.log('File created and data written.');

  // 2. Append data to the file
  fs.appendFile(filePath, 'This is the appended line.\n', (err) => {
    if (err) throw err;
    console.log('Data appended to file.');

    // 3. Read the file content
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File contents:\n', data);

      // 4. Rename the file
      const newPath = path.join(__dirname, 'renamed_example.txt');
      fs.rename(filePath, newPath, (err) => {
        if (err) throw err;
        console.log('File renamed!!');

        // 5. Delete the file
        fs.unlink(newPath, (err) => {
          if (err) throw err;
          console.log('File deleted successfully!!');
        });
      });
    });
  });
});
