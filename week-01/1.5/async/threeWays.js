let fs = require("fs");

function onDone(data) {
  console.log(data);
}

// Using Callbacks
function customReadFileCallback(cb) {
  fs.readFile("a.txt", "utf-8", (_, data) => {
    cb(data);
  });
}

customReadFileCallback(onDone);

// Using Promises
function customReadFilePromises() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", (_, data) => {
      resolve(data);
    });
  });
}

customReadFilePromises().then(onDone);

// Using Async Await
async function main() {
  let data = await customReadFilePromises();
  onDone(data);
}

main();
