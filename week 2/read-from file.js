const fs = require('fs');

const fileName = 'file.txt'; 

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);

  // Expensive operation
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i; 
  }

  console.log('Sum:', sum);
});

console.log('Reading file...');
