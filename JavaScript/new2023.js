//** New 1 */
// Old Way
const users = [
  { id: 1, name: "user1", age: 19 },
  { id: 2, name: "user2", age: 14 },
  { id: 3, name: "user3", age: 22 },
  { id: 4, name: "user4", age: 13 },
];

let lastUser;
for (let i = users.length - 1; i >= 0; i--) {
  if (users[i].age > 18) {
    lastUser = users[i];
    break;
  }
}
console.log(lastUser); //=> {id: 3, name: 'user3', age: 22}

// using findLast()
const lastUser2 = users.findLast((user) => user.age > 18);
console.log(lastUser2); //=> {id: 3, name: 'user3', age: 22}

//** New 2 */
// toSorted()
const months = ["January", "February", "March", "April", "May"];

//using reverse()
const reversedMonths = months.reverse();
console.log(months); //=> ['May', 'April', 'March', 'February', 'January']; // Original array is altered
console.log(reversedMonths); //=> ['May', 'April', 'March', 'February', 'January'];

//using toReversed()
const reversedMonths2 = months.toReversed();
console.log(months); //=> ['January', 'February', 'March', 'April', 'May']; // Original array remains unchanged
console.log(reversedMonths2); //=> ['May', 'April', 'March', 'February', 'January'];

// toSorted()
const prime = [13, 7, 17, 2];

//using sort()
const sortPrime = prime.sort();
console.log(prime); //=> [2,7,13,17]; // Original array is altered
console.log(sortPrime); //=> [2,7,13,17];

//using toSorted()
const sortPrime2 = prime.toSorted();
console.log(prime); //=> [13,7,17,2]; // Original array remains unchanged
console.log(sortPrime2); //=> [2,7,13,17];

// toSplice()
const numbers = [1, 2, 3, 4, 5, 6];

//using splice()
const spliceNumbers = numbers.splice(4, 1);
console.log(numbers); //=> [1,2,3,4,6]; // Original array is altered
console.log(spliceNumbers); //=> [1,2,3,4,6];

//using toSpliced()
const sortPrime3 = prime.toSorted(4, 1);
console.log(prime); //=> [1,2,3,4,5,6]; // Original array remains unchanged
console.log(sortPrime3); //=> [1,2,3,4,6];

// with()
const usernames = ["user1", "user2", "user3"];

//old way of updating array value
usernames[1] = "newUser";
console.log(usernames); //=> ['user1', 'newUser', 'user3']

// using with()
const updatedUsernames = usernames.with(1, "newUser");
console.log(usernames); //=> ['user1', 'user2', 'user3'] //Original array remains unchanged
console.log(updatedUsernames); //=> ['user1', 'newUser', 'user3']

// Symbols as WeakMap Keys
//old way
const privateData = new Map();
const obj = {};

privateData.set(obj, 'This is private data');
console.log(privateData.get(obj)); // Output: "This is private data"

//using WeakMap and symbol
const privateData2 = new WeakMap();
const obj2 = {label:'Private data'};

const key = Symbol('privateKey'); // Create a unique Symbol as the key
privateData.set(key, obj); // Use the Symbol key to associate private data
console.log(privateData.get(key)); // Output: {label:'Private data'}

//** GroupBy  */
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);