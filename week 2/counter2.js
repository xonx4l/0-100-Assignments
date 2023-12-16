let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);

  if (counter < 10) {
    setTimeout(incrementCounter, 100);
  }
}

incrementCounter(); 
