const ages = [21, 22, 23, 24, 25, 26, 27];

// Store the first element as current max
let max = ages[0];
for (let i = 0; i < ages.length; i++) {
  // If there is any element greater than current max
  // then update the max.
  max = max > ages[i] ? max : ages[i];
}

console.log(`Max element ${max}`);
