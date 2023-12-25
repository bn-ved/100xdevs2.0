// "setTimeout()"
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
// "setTimeOut()" expects a function.
function functionWrapper() {
  console.log(findSum(100));
}

setTimeout(functionWrapper, 1000);
console.log("Hello! World");
