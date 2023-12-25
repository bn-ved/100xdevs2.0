function timer() {
  // Get current time.
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Format the current time.
  if (hours >= 12) {
    console.log(`${hours}:${minutes}:${seconds} PM`);
  } else {
    console.log(`${hours}:${minutes}:${seconds} AM`);
  }
}

setInterval(timer, 1000);
