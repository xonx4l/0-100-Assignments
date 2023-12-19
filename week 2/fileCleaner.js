const fs = require('fs');

const filePath = 'file.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;

  const cleaned = data.replace(/\s+/g, ' ');
  
  fs.writeFile(filePath, cleaned, err => {
    if (err) throw err;
    
    console.log('File updated with spaces removed');
  });
});
