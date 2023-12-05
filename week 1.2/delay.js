function normal() {
  console.log("normal run ");
}

function delay() {
  console.log("delayed function ");
}

normal();
setTimeout(delay, 1000);
