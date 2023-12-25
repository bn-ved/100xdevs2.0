const fs = require("fs");

function cb(data) {
  console.log(data);
}

function customReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

customReadFile(cb);
