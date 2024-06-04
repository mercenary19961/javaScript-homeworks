/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
jobTitle = prompt("Enter your job title:");
location = prompt("Enter your location:");
wifeName = prompt("Enter your wifeName:");
numberOfChildren = parseInt(prompt("Enter your number of children:"));
function tellFortune(jobTitle, location, wifeName, numberOfChildren) {
  console.log(
    "You will be a",
    jobTitle,
    "in",
    location,
    "and married to",
    wifeName,
    "with",
    numberOfChildren,
    "kids."
  );
}
tellFortune(jobTitle, location, wifeName, numberOfChildren);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
var userInput = parseInt(prompt("Whats your dog's age? "));
puppyAge = userInput * 7;
function calculateDogAge(puppyAge) {
  return console.log("Your doggie is", puppyAge, "years old in dog years!");
}
calculateDogAge(puppyAge);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
userAge = Number(prompt("Enter your age: "));
userTea = Number(prompt("How many cups of tea you drink per day : "));
cupsOfTea = (100 - userAge) * 365 * userTea;
if (userAge >= 100) {
  return console.log("Please enter a viable age. ");
} else {
  calculateSupply(cupsOfTea, userTea);
}
function calculateSupply(cupsOfTea, amountPerDay) {
  return console.log(
    "You will need",
    cupsOfTea,
    "cups of tea to last you until the ripe old age of",
    amountPerDay
  );
}
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
userName = prompt("Enter your name: ");
function great(name) {
  return console.log("Hello", name);
}
great(userName);
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(cat) {
  return 2 * cat;
}

function double(num) {
  return 2 * num;
}

function double(x) {
  return 2 * x;
}
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
var num = Number(prompt("Enter a number :"));
function cube(num) {
  let cubed = num * num * num;
  return console.log(cubed);
}
cube(num);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
var a = Number(prompt("Enter first number:"));
var b = Number(prompt("Enter second number:"));
function multiply(a, b) {
  multiplication = a * b;
  return console.log(multiplication);
}
multiply(a, b);
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
userAge = Number(prompt("Enter your age:"));
function canIGetADrivingLicense(age) {
  if (age >= 20) {
    return console.log("yes you can");
  } else {
    return console.log("please come back after 3 years to get one");
  }
}
canIGetADrivingLicense(userAge);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
var input1 = prompt("Enter the first word:");
var input2 = prompt("Enter the second word:");
function sameLength(string1, string2) {
  if (string1.length == string2.length) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}
sameLength(input1, input2);
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
let input1 = Number(prompt("Enter number 1 : "));
let input2 = Number(prompt("Enter number 2 : "));
function largerNubmer(num1, num2) {
  if (num1 >= num2) {
    return console.log(num1);
  }
}
largerNubmer(input1, input2);
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
let input1 = Number(prompt("Enter number 1 : "));
let input2 = Number(prompt("Enter number 2 : "));
let input3 = Number(prompt("Enter number 3 : "));
function smallerNumber(num1, num2, num3) {
  if (num1 <= num2) {
    if (num1 <= num3) {
      return console.log(num1);
    } else {
      return console.log(num3);
    }
  } else {
    if (num2 <= num3) {
      return console.log(num2);
    } else {
      return console.log(num3);
    }
  }
}
smallerNumber(input1, input2, input3);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

var str1 = prompt("Enter first word : ");
var str2 = prompt("Enter second word : ");
var str3 = prompt("Enter third word : ");
var str4 = prompt("Enter fourth word : ");
var str5 = prompt("Enter fifth word : ");

function shorterString(str1, str2, str3, str4, str5) {
  let wordsList = [str1, str2, str3, str4, str5];
  let shortest = wordsList[0];
  for (let i = 0; i < wordsList.length; i++) {
    if (wordsList[i].length <= shortest.length) {
      shortest = wordsList[i];
    }
  }
  return console.log(shortest);
}
shorterString(str1, str2, str3, str4, str5);
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

var str1 = prompt("Enter first word : ");
var str2 = prompt("Enter second word : ");
var str3 = prompt("Enter third word : ");
var str4 = prompt("Enter fourth word : ");

function longerString(str1, str2, str3, str4, str5) {
  let wordsList = [str1, str2, str3, str4];
  let longest = wordsList[0];
  for (let i = 0; i < wordsList.length; i++) {
    if (wordsList[i].length >= longest.length) {
      longest = wordsList[i];
    }
  }
  return console.log(longest);
}
longerString(str1, str2, str3, str4);

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
var userInput = Number(prompt("Enter a number :"));
function isEven(num) {
  if (num % 2 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isEven(userInput);
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

var userInput = Number(prompt("Enter a number :"));
function isOdd(num) {
  if (num % 2 != 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isOdd(userInput);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
userInput = Number(prompt("Enter a numer: "));
function positive(num) {
  if (num < 0) {
    num *= -1;
    console.log(num);
  } else {
    console.log(num);
  }
}
positive(userInput);
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
var fName = prompt("Enter your first name: ");
var lName = prompt("Enter your last name: ");
function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName(fName, lName);
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
var avgNum1 = Number(prompt("Enter a number : "));
var avgNum2 = Number(prompt("Enter a number : "));
var avgNum3 = Number(prompt("Enter a number : "));
var avgNum4 = Number(prompt("Enter a number : "));
var avgNum5 = Number(prompt("Enter a number : "));
function average(num1, num2, num3, num4, num5) {
  let sum = num1 + num2 + num3 + num4 + num5;
  let avg = sum / 5;
  console.log(avg);
}
average(avgNum1, avgNum2, avgNum3, avgNum4, avgNum5);
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
  console.log(Math.random());
}
randomNumber();
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
var inputOne = Number(prompt("Enter a number : "));
var inputTwo = Number(prompt("Enter a number : "));
if (inputOne <= inputTwo) {
  var minNum = inputOne;
  var maxNum = inputTwo;
} else {
  var maxNum = inputOne;
  var minNum = inputTwo;
}
function randomBetweenNumbers(num1, num2) {
  let randomNum = Math.random() * (maxNum - minNum) + minNum;
  return console.log(randomNum);
}
randomBetweenNumbers(inputOne, inputTwo);
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
var userGrade = Number(prompt("What's your grade in numbers? "));
function scoreInUniversty(grade) {
  if (grade < 0 || grade > 100) {
    return console.log("Please enter a valid number");
  } else if (grade >= 0 && grade < 50) {
    return console.log("F");
  } else if (grade >= 50 && grade < 70) {
    return console.log("D");
  } else if (grade >= 70 && grade < 85) {
    return console.log("C");
  } else if (grade >= 85 && grade < 95) {
    return console.log("B");
  } else if (grade >= 95 && grade <= 100) {
    return console.log("B");
  }
}
scoreInUniversty(userGrade);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var container = 0;
function counter() {
  return (container += 1);
}
console.log(counter());
console.log(counter());
console.log(counter());
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
var container = 0;
function counter() {
  return (container += 1);
}
function resetCounter() {
  console.log(container, "and the counter reset now");
  return (container = 0);
}
console.log(counter());
console.log(counter());
console.log(counter());
resetCounter();
console.log(counter());
console.log(counter());
resetCounter();
console.log(counter());
