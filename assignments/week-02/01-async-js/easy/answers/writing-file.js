const fs = require("fs");

fs.writeFile("b.txt", "Hello World!", (err) => {
  console.log("File written successfully.");
});
