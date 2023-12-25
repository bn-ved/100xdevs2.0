function main() {
  console.log("something");
}

// Promise Chaining.
function promise(main) {
  return new Promise((resolve) => {
    setTimeout(() => {
      main();
      resolve();
    }, 1000);
  }).then(
    new Promise((resolve) => {
      setTimeout(() => {
        main();
        resolve();
      }, 2000);
    }),
  ).then(
    new Promise((resolve) => {
      setTimeout(() => {
        main();
        resolve();
      }, 3000);
    }),
  );
}

promise(main);
