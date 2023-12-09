const ages = [21, 22, 23, 24, 25, 26, 27];

for (let i = 0; i < ages.length; i++) {
  // If "age" is divided by 2
  // "%" known as modulo operator
  // which returns the remainder.
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}
