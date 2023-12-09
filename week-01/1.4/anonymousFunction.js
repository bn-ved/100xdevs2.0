function sum(a, b, operation) {
  let val1 = operation(a);
  let val2 = operation(b);

  return val1 + val2;
}

console.log(sum(1, 2, function (a) {
  return a * a;
}));
