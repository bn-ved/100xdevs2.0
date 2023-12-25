let i = 0;

function counter() {
  i++;
  console.log(`${i} seconds`);
  setTimeout(() => {
    counter();
  }, 1000);
}

counter();
