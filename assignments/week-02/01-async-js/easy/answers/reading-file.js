const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log(sum);

/* Ideas From this toDateString();
 * - JavaScript runtime delegates the readfile() operation
 * - Meanwhile JavaScript does the further processing and prints the result
 * - After that it goes back and print the file content.
 */
