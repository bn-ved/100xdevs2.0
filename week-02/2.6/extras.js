// Arrow function
function sum(a, b) {
  return a + b;
}

const ans = (a, b) => {
  return a + b;
};

console.log(sum(1, 3));
console.log(ans(1, 3));

// "map()" function
// Given a array [1, 2, 3, 4, 5] convert it to [2, 4, 6, 8, 10]
// that is every value is multiplied by 2
const input = [1, 2, 3, 4, 5];

function transform(n) {
  return n * 2;
}

console.log(input.map(transform));

// "filter()" function
// Given a array [1, 2, 3, 4, 5] print even numbers.
const numbers = [1, 2, 3, 4, 5];

function even(n) {
  return n % 2 == 0 ? true : false;
}

// Print even numbers.
console.log(numbers.filter(even));
