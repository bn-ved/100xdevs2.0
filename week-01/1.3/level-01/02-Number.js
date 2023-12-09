function explainParseInt(value) {
  console.log("Original Value:", value);
  // "parseInt(value) converts the string to integer if possible
  // else returns "NaN"
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42"); // 42
explainParseInt("42px"); // 42
explainParseInt("3.14"); // 3

function explainParseFloat(value) {
  console.log("Original Value:", value);
  // "parseFloat(value) converts the string to floating point number if possible
  // else returns "NaN"
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
