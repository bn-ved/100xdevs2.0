// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  // "str.length" returns the length of the string.
  console.log("Length:", str.length);
}
getLength("Hello World"); // Output: 11

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  // "indexOf(target)" returns the index of the first occurrance of target
  // it returns -1 if the target is not present.
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World"); // Ouput: 6

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  // "lastIndexOf(target)" returns the index of the last occurance of the target
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World"); // Output: 6

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  // "slice(start, end)" returns the substring starting from "start" and ending before "end"
  // "end" is not included
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5); // Ouput: Hello

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  // "replace(target, replacement)" replaces the target with replacement string if matched.
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript"); // Output: Hello JavaScript

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  // "split(separator)" splits the string based on the pattern you provide.
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " "); // Output: ["Hello", "Wordl"]

// trim
function trimString(str) {
  console.log("Original String:", str);
  // "trim()" trims down the extra spaces preset in starting and end of the string.
  console.log("After trim:", str.trim());
}
trimString(" Hello World "); // Output: "Hello World"

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  // "toUpperCase()" transforms the text string to uppercase.
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World"); // Ouput: "HELLO WORLD"

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  // "toLowerCase()" transforms the text string to lowercase.
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World"); // Output: "hello world"
