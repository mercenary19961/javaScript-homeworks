// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
var x = parseInt(prompt("Enter a number for x:"));
var y = parseInt(prompt("Enter a number for y:"));
var text;

if (x > 10 && y > 10) {
  text = "Both numbers are greater than 10";
} else {
  text = "At least one number is not greater than 10";
}

console.log(text);

// 2- Write a program to declare a username and a password.
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
var username = "zaido";
var password = "marhba";
var userNameInput = prompt("Enter your name:");
var userPassInput = prompt("Enter your password:");
if (userNameInput == username && userPassInput == password) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
var x = parseInt(prompt("Enter a number"));
if (x >= 10 && x <= 20) {
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is not between 10 and 20");
}

// 4- Write a program that to declare age and whether they have a driver's license (yes or no).
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
var age = parseInt(prompt("Enter a your age:"));
var license = prompt("Do you have a driver's license (yes or no)");
if (age >= 18 && license == "yes") {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

// 5- Write a program to declare a number.
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
var numb = parseInt(prompt("Enter a number:"));
if (numb >= 10 || numb <= 0) {
  console.log("Invalid number");
} else {
  console.log("Valid number");
}
// 6- Write a programto declare a number.
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
//Otherwise, print "The number is not valid".
let numb2 = parseInt(prompt("Enter a number:"));
if ((numb2 >= 5 && numb2 <= 10) || (numb2 >= 20 && numb2 <= 25)) {
  console.log("The number is valid");
} else {
  console.log("The number is not valid");
}

// 7- to declare a password. If the password is "secret" or "password", print "Access granted".
//Otherwise, print "Access denied".
let passwordIntry = prompt("Enter a password:");
if (passwordIntry == "secret" || passwordIntry == "print") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
var userNum = parseInt(prompt("Enter a number :"));
if (userNum >= 0 && userNum <= 100 && userNum % 2 == 0) {
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}

// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
//Otherwise, print "Both numbers are positive".
var numOne = parseInt(prompt("Enter num 1 :"));
var numTwo = parseInt(prompt("Enter num 2 :"));
if (numOne < 0 || numTwo < 0) {
  console.log("At least one number is negative");
} else {
  console.log("Both numbers are positive");
}
// 10- Write a program to declare age and whether they are a student (yes or no).
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
let yourAge = parseInt(prompt("Enter your age :"));
let student = prompt("Are you a student? : (yes, no)");
if (yourAge < 18 || student === "yes") {
  console.log("You qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
}
