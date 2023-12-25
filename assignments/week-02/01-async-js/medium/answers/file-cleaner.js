const fs = require("fs");

// Read file from the data.
function readFile(fileName) {
  return new Promise((resolve) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("File read successful.");
      resolve(data);
    });
  });
}

// Writing the data to the file.
function writeFile(fileName, data) {
  return new Promise((resolve) => {
    fs.writeFile(fileName, data, "utf8", (err) => {
      if (err) {
        throw err;
      }
      console.log("File write Successful.");
      resolve(data);
    });
  });
}

// Removing all extra spaces.
function removeSpace(data) {
  return data.replace(/\s+/g, " ");
}

// putting all together.
async function main() {
  let data = await readFile("input.txt");
  data = removeSpace(data);
  await writeFile("output.txt", data);
  console.log(data);
}

main();
