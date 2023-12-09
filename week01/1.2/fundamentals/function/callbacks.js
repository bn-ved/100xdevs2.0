// "calculateArithmatic" function uses "sum" as a callback method
function calculateArithmatic(a, b, sum) {
  return sum(a, b);
}

function sum(a, b) {
  return a + b;
}

console.log(calculateArithmatic(10, 12, sum));
