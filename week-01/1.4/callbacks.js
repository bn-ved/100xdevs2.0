function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b, operation) {
  const val1 = operation(a);
  const val2 = operation(b);

  return val1 + val2;
}

console.log(sumOfSquares(1, 2, square));
console.log(sumOfSquares(1, 2, cube));
