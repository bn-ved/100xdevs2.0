function main() {
  console.log("somthing");
}

function promise(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

async function call() {
  await promise(1000);
  main();
  await promise(2000);
  main();
  await promise(3000);
  main();
}

call();
