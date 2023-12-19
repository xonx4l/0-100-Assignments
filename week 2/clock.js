let counter = 0;

setInterval(() => {

  // Get current time
  let date = new Date(); 

  // Format time
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let amPm = 'AM';
  if (hours >= 12) {
    amPm = 'PM';
    hours = hours - 12;
  }

  // Pad with leading 0
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  // Construct formatted time string
  let timeString = `${hours}:${minutes}:${seconds} ${amPm}`;

  // Log time
  console.log(timeString);

  counter++;
}, 1000);
