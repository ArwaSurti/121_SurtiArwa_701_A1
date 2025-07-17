const fs = require('fs');
const util = require('util');
const path = require('path');
const port = 3000;

//  Promisify fs.unlink
const unlinkAsync = util.promisify(fs.unlink);

//  Path to the file to delete
const filePath = path.join(__dirname, 'temp.txt'); 

//  Async function to delete file
async function fsunlik() {
  try {
    await unlinkAsync(filePath);
    console.log(`File deleted successfully: ${filePath}`);
  } catch (error) {
    console.error(`Failed to delete file: ${error.message}`);
  }
}
fsunlik();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
