const fs = require('fs');

const fileName = 'file.txt';

// File contents to write 
const content = 'Some content!';

fs.writeFile(fileName, content, err => {
  if (err) {
    console.error(err);
    return;
  }

  // File written successfully
  console.log('Wrote to file'); 
});

console.log('Writing to file...');
