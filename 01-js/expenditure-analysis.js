/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const items =[{
        itemName1:cookies,
        category1:Foods,
        price1:20,
        total1:60,
        
        itemName2:Phone,
        category2:digital,
        price2:1000,
        total2:2000,

  }]

  console.log(items["category1"] ["total1"], items["category2"] ["total2"]);
}

module.exports = calculateTotalSpentByCategory;
