let fs = require("fs");

function customReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

async function main() {
  let data = await customReadFile();
  console.log(data);
}

main();
