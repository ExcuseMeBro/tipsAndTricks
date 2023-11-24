// https://www.jstips.co/
// *** #1 tip ***
const arr1 = ['Kolade', 'Chelsea', 10, true];
const arr2 = [1, 2, 3, 4];

console.log({arr1, arr2})
console.table(arr1)

// *** #2 tip ***
const myNum = '5';

let convertNum1 = +myNum;
let convertNum2 = Number(myNum);

console.log(convertNum1, typeof convertNum1); // 5 'number'
console.log(convertNum2, typeof convertNum2); // 5 'number'

// *** #3 tip ***
console.group('Bio:');

console.log('My name is Karl');
console.warn("I don't like to be late");
console.error('You came late');

console.groupEnd();

// *** #4 tip ***
const styles = `padding: 15px;
                background-color: #2ecc71;
                color: black`;

console.log('%c Hello, Everyone!', styles);

// *** #5 tip ***
const str = 'john karl';
const capitalizedStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizedStr(str)); // John karl
console.log(capitalizedStr('doe')); // Doe

// *** #6 tip ***
// Destructuring without default values
const fruits = ['Apple', 'Banana'];
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // Apple
console.log(secondFruit); // Banana
console.log(thirdFruit); // undefined

// Destructuring with default values
const [fruit1, fruit2, fruit3 = 'Orange'] = fruits;

console.log(fruit1); // Apple
console.log(fruit2); // Banana
console.log(fruit3); // Orange

// *** #7 tip ***
// Without default values
const person = { name: 'John Doe', age: 30 };
const { name, age, occupation } = person;
console.log(name); // John Doe
console.log(age); // 30
console.log(occupation); // undefined

// With default values
const { firstName = 'John', lastName = 'Doe', gender = 'Male' } = person;
console.log(firstName); // John
console.log(lastName); // Doe
console.log(gender); // Male

// *** #7 tip ***
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]

// merge two or more arrays
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

const mergedArray = [...arr3, ...arr4];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// *** #8 tip ***
const originalObj = { name: 'John', age: 30 };
const clonedObj = { ...originalObj };

console.log(clonedObj); // { name: 'John', age: 30 }

// *** #9 tip ***
function addNumbers(a, b, c) {
    return a + b + c;
}

const numbers = [10, 12, 8];
const sum = addNumbers(...numbers);

console.log(sum); // 30

// *** #10 tip ***
// Traditional Function Expression
function add1(a, b) {
    return a + b;
}

// Arrow Function
const add2 = (a, b) => a + b;

console.log(add1(1, 2)); // 3
console.log(add2(5, 8)); // 13

// Using Traditional Function Expression
const numbers1 = [3, 4];
const numbers2 = [2, 8];

const squared1 = numbers1.map(function (num) {
    return num * num;
});

// Using Arrow Function
const squared2 = numbers2.map((num) => num * num);

console.log(squared1); // [ 9, 16 ]
console.log(squared2); // [ 4, 64 ]

// *** #11 tip ***
const person1 = {
    name: 'John Doe',
    age: 30,
    gender: 'male',
};

// Traditional way
const name2 = person1.name;
const age2 = person1.age;
const gender2 = person1.gender;

console.log(name2, age2, gender2); // John Doe 30 male

// with destructuring
const { name1, age1, gender1 } = person1;

console.log(name1, age1, gender1);
// John Doe 30 male

// *** #12 tip ***
const files = [
    'text.txt',
    'document.txt',
    'image.jpg',
    'script.js',
    'docs.txt',
];

// Get .txt files
const textFiles = files.filter((file) => file.endsWith('.txt'));
console.log(textFiles); // [ 'text.txt', 'document.txt', 'docs.txt' ]

// *** #13 tip ***
const greet = '   Hello world!   ';
console.log(greet.trim());
// Hello world!

const greet2 = '   Hello world!   ';
console.log(greet2.trimStart());
// Output: 'Hello, world!   '

const text = '   Hello world!   ';
console.log(text.trimEnd());
// Output: '   Hello world!'

const input = '   ';
if (input.trim() === '') {
    console.log('The input is empty but has whitespace characters.');
} else {
    console.log('The input contains non-whitespace characters.');
}

// *** #14 tip ***
function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

console.log(toTitleCase('welcome to twitter (now x)!'));

// *** #15 tip ***
function sumArguments() {
    // The "arguments" object is array-like
    const argsArray = Array.from(arguments);
    return argsArray.reduce((acc, num) => acc + num, 0);
}

const result = sumArguments(1, 2, 3, 4, 5);
console.log(result); // Output: 15

// https://www.freecodecamp.org/news/javascript-tips-for-better-web-dev-projects/

// *** #16 tip ***
const key = 'name';
const person3 = { [key]: 'Alice' };
console.log(person3.name); // Output: Alice

// *** #17 tip ***
const notANumber = 'Not a number';
console.log(Number.isNaN(notANumber)); // Output: false

// *** #18 tip ***
const user = { info: { name: 'Alice' } };
console.log(user.info?.age); // Output: undefined

// *** #19 tip ***
const msg = 'Hello, world!';
const pattern = /Hello/g;
console.log(msg.match(pattern)); // Output: ['Hello']

// *** #20 tip ***
const data = '{"age":"30"}';
const parsed = JSON.parse(data, (key, value) => {
    if (key === 'age') return Number(value);
    return value;
});
console.log(parsed.age); // Output: 30

// *** #21 tip ***
const users = [{ name: 'Alice' }, { name: 'Bob' }];
console.table(users);
console.groupCollapsed('Details');
console.log('Name: Alice');
console.log('Age: 30');
console.groupEnd();

// *** #22 tip ***
async function fetchData() {
    try {
        const response = await fetch('url');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

// *** #23 tip | Closures Unleashed: Data Privacy ***
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2

// *** #24 tip | Memoization for Speed: Efficient Recalculation ***
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacci(10)); // Output: 55

// https://medium.com/@satyamv57/20-javascript-tips-and-tricks-you-can-use-right-now-e698880db0f1

// *** #25 tip | Hail the Intersection Observer: Effortless Scroll Effects ***
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

const elements = document.querySelectorAll('.animate');
elements.forEach(element => observer.observe(element));

// *** #26 tip | ES6 Modules for Clean Code: Organized and Modular ***
// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5

// *** #27 tip | Proxies: Beyond Objects ***
const handler = {
    get(target, prop) {
        return `Property "${prop}" doesn't exist.`;
    }
};

const proxy = new Proxy({}, handler);
console.log(proxy.name); // Output: Property "name" doesn’t exist.
