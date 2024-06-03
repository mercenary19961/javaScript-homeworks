// 1- Write a program that prints numbers from 1 to 10 using a for loop.

for (i = 1; i < 11; i++) {
  console.log(i);
}
// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

for (i = 1; i < 6; i++) {
  console.log(i * 2);
}
// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 1) {
    console.log(i);
  }
}
// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

enteredNum = parseInt(prompt("Enter a number :"));
for (i = 1; i <= 10; i++) {
  console.log(enteredNum * i);
}
// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

var sum = 0;
var n = 1;
while (n <= 100) {
  sum += n;
  n++;
}
console.log(sum);
// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
sum = 1;
var userNum = parseInt(prompt("Enter a number :"));
for (let i = userNum; i >= 1; i--) {
  sum *= i;
}
console.log(sum);
// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
var fibonacciNum = parseInt(prompt("Enter a number :"));
let a = 0;
let b = 1;
while (a <= fibonacciNum) {
  console.log(a);
  [a, b] = [b, a + b];
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
// const array1 = [5, 10, 15, 20];
// let k = -1;
// while (k >= -4) {
//   console.log(array1[k]);
//   k--;
// }

const array1 = [5, 10, 15, 20];
let k = array1.length - 1; // Start from the last index

while (k > 0) {
  console.log(array1[k]);
  k--;
}
