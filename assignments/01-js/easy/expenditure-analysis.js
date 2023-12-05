/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const mpp = new Map();
  for (let transaction of transactions) {
    if (mpp.has(transaction.category)) {
      let val = mpp.get(transaction.category) + transaction.price;
      mpp.set(transaction.category, val);
    } else {
      mpp.set(transaction.category, transaction.price);
    }
  }
  return Array.from(
    mpp,
    ([category, totalSpent]) => ({ category, totalSpent }),
  );
}

module.exports = calculateTotalSpentByCategory;
