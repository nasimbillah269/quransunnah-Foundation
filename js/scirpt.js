let x = 9.656;
let y = x.toFixed(4);
console.log(y)

let x = 9.656;
let value = x.toPrecision(6);
// x.toPrecision(2);
// x.toPrecision(4);
// x.toPrecision(6);
console.log(value)

let x = 6;
let value = x.MAX_VALUE
console.log(value)

let x = Number.POSITIVE_INFINITY;
console.log(x)

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[2];

console.log(car)

const cars = ["Saab", "Volvo", "BMW"];
const result = cars.length;
console.log(result)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
for(let i = 0; i < fruits.length; i++){
  const fruit = fruits[i]
  console.log(fruit, i)
}

const numbers = [10, 20, 30, 44];

for(let i = 0; i < numbers.length; i++){
  let sum = 0;
  const number = numbers[i];
  const result = sum  + number;
  console.log(result)
}

const plear = ["neymar", "messi", "ronaldo"];
const result =  plear.push("komala")
console.log(plear)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(fruits)

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
console.log(points)

const points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2)
function myFunction(value, index, array) {
  return value * 2;
}

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.find(myFunction);
console.log(over18);
function myFunction(value, index, array) {
  return value > 18;
}
let number = Math.floor(Math.random() * 20);
console.log(number);

const x = 90;
const y = 200;

if( x >= 10 && y <= 120){
  console.log(true);
}
else{
  console.log(false);
}
let age = 1;
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable);

for(let i = 1; i < 11; i++){
  console.log(i);

}
let i = 0;
while(i < 10){
 i++
 console.log(i);

}

const person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
  let result = person[x];
  console.log(result)
}

const products = [
  {
  name: "pant",
  price: 100,
  color: "red"
  },
  {
  name: "sharit",
  price: 100,
  color: "red"
  },
  {
  name: "pant",
  price: 100,
  color: "red"
  },
  {
  name: "t-shart",
  price: 100,
  color: "red"
  }
];
for(const x in products){
  const product = products[x];
  console.log(product)
}
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("text").innerHTML = "hello";
});
document.getElementById("show").addEventListener("click", function () {
  document.getElementById("show-text").innerHTML = "welcome my text in click";
});
