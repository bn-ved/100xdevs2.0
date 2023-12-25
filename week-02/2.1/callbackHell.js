function main() {
  console.log("something");
}

setTimeout(() => {
  main();
  setTimeout(() => {
    main();
    setTimeout(() => {
      main();
    }, 3000);
  }, 2000);
}, 1000);
