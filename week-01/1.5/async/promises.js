let fs = require("fs");

// Using promise
function customReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

customReadFile().then(onDone);

// Defining a Promise
let d = new Promise(function (resolve) {
  resolve();
});
console.log(d);
