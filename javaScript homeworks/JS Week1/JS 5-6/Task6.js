/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

[1, 7, 9, 45][("Str", "alex", "moh")][("the", "fox", "over", lazy, "dog")];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

1, 0;

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

let array03 = ["fettucini", "chicken breasts", ]

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(array) {
  return array[0];
}

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(array) {
  let last = array.length - 1;
  return array[last];
}
arrayTest = [7, 8, 9, 10];
console.log(lastOfArray(arrayTest));
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);
array.push(10);

console.log(array);
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5];
array2.push(1);
array2.unshift(10);
array2.shift();
array2.pop();
console.log(array2);
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it has an odd element number length,
and return the two middle elemnt in an array if it has an even element length.

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
let middleFirst = 0;
let middleSecond = 0;
function middleOfArray(array) {
  if (array.length % 2 == 0) {
    middleFirst = Math.floor((array.length - 1) / 2);
    middleSecond = Math.ceil((array.length - 1) / 2);
  }
  console.log(array[middleFirst], " and ", array[middleSecond]);
}
middleOfArray(["t", "u", "g", "x"]);
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums.push(44);
console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
arrayTest = [4, 3, 8, 10, 13];
function indexOfArray(array, index) {
  return console.log(array[index]);
}
indexOfArray(arrayTest, 3);
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search about the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
let arrayTest1 = [1, 2, 3, 8, 9];
function arrayExceptLast(array) {
  let lastElement = array.length - 1;
  return array.splice(lastElement, 1);
}
arrayExceptLast(arrayTest1);
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
array12 = [1, 2, 3, 8, 9];
function addToEnd(array, value) {
  let added = array.push(value);
  return array;
}
addToEnd(array12, 10);
// all the exercises below should solved 2 times: 1- for loop 2- while loop
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// #for loop
var numsF13 = [1, 2, 3, 8, 9];
var sum = 0;
function sumArray(array) {
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumArray(numsF13));

// #while
var numsW13 = [1, 2, 3, 8, 9];
function sumArray(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}
console.log(sumArray(numsW13));
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// #for loop
var numsF14 = [1, 2, 3, 8, 9];
function minInArray(array) {
  let smallestValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < smallestValue) {
      smallestValue = array[i];
    }
  }
  return smallestValue;
}
console.log(minInArray(numsF14));
// while loop
var numsW14 = [1, 2, 3, 8, 9];
function minInArray(array) {
  var smallestValue = array[0];
  var i = 1;
  while (i < array.length) {
    if (array[i] < smallestValue) {
      smallestValue = array[i];
    }
    i++;
  }
  return smallestValue;
}
console.log(minInArray(numsW14));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// #for loop
var numsF15 = [1, 2, 3, 8, 9];
function removeFromArray(array, element) {
  for (i = 0; i < array.length; i++) {
    if (element == array[i]) {
      array.splice(i, 1);
    }
  }
  return array;
}
console.log(removeFromArray(numsF15, 3));

// #while
var numsW15 = [1, 2, 3, 8, 9];
function removeFromArray(array, element) {
  var i = 0;
  while (i < array.length - 1) {
    if (array[i] == element) {
      array.splice(i, 1);
    }
    i++;
  }
  return array;
}
console.log(removeFromArray(numsW15, 3));
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// #for loop
function oddArray(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      array.splice(i, 1);
    }
  }
  return array;
}
var numsF16 = [1, 2, 3, 8, 9];
console.log(oddArray(numsF16));

// #while loop
function oddArray(array) {
  i = 0;
  while (i < array.length) {
    if (array[i] % 2 != 0) {
      array.splice(i, 1);
    }
    i++;
  }
  return array;
}
var numsW16 = [1, 2, 3, 8, 9];
console.log(oddArray(numsW16));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// #for loop
function aveArray(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
var numsF17 = [1, 2, 3, 8, 9];
console.log(aveArray(numsF17));

// #while loop
function aveArray(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum / array.length;
}
var numsW17 = [1, 2, 3, 8, 9];
console.log(aveArray(numsW17));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// #for loop
function shorterInArray(array) {
  var shortestStr = 0;
  for (i = 1; i < array.length; i++) {
    if (array[i].length < array[shortestStr].length) {
      shortestStr = i;
    }
  }
  return array[shortestStr];
}
var stringsF1 = ["alex", "mercer", "madrasa", "rashed2", "emd", "hala"];
console.log(shorterInArray(stringsF1));

// #while loop
function shorterInArray(array) {
  var shortestStr = 0;
  var i = 0;
  while (i < array.length) {
    if (array[i].length < array[shortestStr].length) {
      shortestStr = i;
    }
    i++;
  }
  return array[shortestStr];
}
var stringsW1 = ["alex", "mercer", "madrasa", "rashed2", "emd", "hala"];
console.log(shorterInArray(stringsW1));
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// #for loop
function repeatChar(str, char) {
  var chosenChar = 0;
  var charArray = str.split("");
  for (i = 0; i < charArray.length; i++) {
    if (charArray[i] == char) {
      chosenChar++;
    }
  }
  return chosenChar;
}
var stringF2 = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(stringF2, "a"));

// #while loop
function repeatChar(str, char) {
  var chosenChar = 0;
  var charArray = str.split("");
  var i = 0;
  while (i < charArray.length) {
    if (charArray[i] == char) {
      chosenChar++;
    }
    i++;
  }
  return chosenChar;
}
var stringW2 = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(stringW2, "a"));
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// # for loop
function evenIndexOddLength(array) {
  for (i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      if (array[i].length % 2 == 1) {
        return array[i];
      }
    }
  }
}
var stringF3 = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(stringF3));

// # while loop
function evenIndexOddLength(array) {
  var i = 0;
  while (i < array.length) {
    if (i % 2 == 0) {
      if (array[i].length % 2 == 1) {
        return array[i];
      }
    }
    i++;
  }
}
var stringW3 = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(stringW3));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]  
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000] ####first index should be "1"######

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// #for loop
function powerElementIndex(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    let newElement = array[i] ** i;
    newArray.push(newElement);
  }
  return newArray;
}

var numsW21 = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(numsF21));

// #while loop
function powerElementIndex(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    let newElement = array[i] ** i;
    newArray.push(newElement);
    i++;
  }
  return newArray;
}
var numsW21 = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(numsW21));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// #for loop
function evenNumberEvenIndex(array) {
  var evenArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && i % 2 == 0) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
}
var numsF22 = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(numsF22));

// #while loop

function evenNumberEvenIndex(array) {
  var evenArray = [];
  var i = 0;
  while (i < array.length) {
    if (array[i] % 2 == 0 && i % 2 == 0) {
      evenArray.push(array[i]);
    }
    i++;
  }
  return evenArray;
}
var numsW22 = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
console.log(evenNumberEvenIndex(numsW22));
