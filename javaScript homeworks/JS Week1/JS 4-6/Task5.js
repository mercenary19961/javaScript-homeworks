// 1-Write a function to find the largest element in an array.
let array1 = [3, 4, 10, 20, 0];
function largestElement(array) {
  let largestValue = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > largestValue) {
      largestElement = array[i];
    }
  }
  return largestElement;
}
console.log(largestElement(array1));

// 2-Write a function to find the smallest element in an array.
let array2 = [3, 4, 10, 20, 0];
function smallestElement(array) {
  let smallestValue = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] < smallestValue) {
      smallestValue = array[i];
    }
  }
  return smallestValue;
}
console.log(smallestElement(array2));

// 3-Write a function to find the sum of all elements in an array.
let array3 = [3, 4, 10, 20, 0];
function sumElement(array) {
  let sum = 0;
  for (i = 0; i < array.length - 1; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumElement(array3));
// 4-Write a function to find the average of all elements in an array.
let array4 = [3, 4, 10, 20, 0];
function averageElement(array) {
  let sum = 0;
  for (i = 0; i < array.length - 1; i++) {
    sum += array[i];
  }
  let average = sum / array.length;
  return average;
}
console.log(averageElement(array4));
// 5-Write a function to find the median of all elements in an array.
let array5 = [3, 4, 10, 20, 0];
function medianElement(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let median = Math.floor(array.length / 2);
  return sortedArray[median];
}
console.log(medianElement(array5));
// 6-Write a function to remove all duplicates from an array.

// method #1

// let array6 = [3, 4, 10, 20, 4];
// function removeDuplicates(array) {
//   let exist = [];
//   for (i = 0; i < array.length; i++) {
//     if (!exist.includes(array[i])) {
//         exist.push(array[i]);
//     }
//   }
//   return exist
// }
// console.log(removeDuplicates(array6));

// method #2

let array6 = [3, 4, 10, 20, 4];
function removeDuplicates(array) {
  let exist = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < exist.length; j++) {
      if (array[i] === exist[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      exist.push(array[i]);
    }
  }
  return exist;
}

console.log(removeDuplicates(array6));

// 7-Write a function to sort an array in ascending order.

let array7 = [3, 4, 10, 20, 0];
function ascendingOrder(array) {
  let sortedArray = array.sort((a, b) => a - b);
  return sortedArray;
}
console.log(ascendingOrder(array7));
// 8-Write a function to sort an array in descending order.

// method #1

// let array8 = [3, 4, 10, 20, 0];
// function descendingOrder(array) {
//     let sortedArray = array.sort((a,b) => b - a);
//     return sortedArray
// }
// console.log(descendingOrder(array8));

// method #2

let array8 = [3, 4, 10, 20, 0];

function descendingOrder(array) {
  let descendingArray = [];
  while (array.length > 0) {
    let largestIndex = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[largestIndex]) {
        largestIndex = i;
      }
    }
    descendingArray.push(array[largestIndex]);
    array.splice(largestIndex, 1);
  }
  return descendingArray;
}

console.log(descendingOrder(array8));

// 9-Write a function to shuffle the elements of an array randomly.

let array9 = [3, 4, 10, 20, 0];
function shuffleArray(array) {
  for (i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
console.log(shuffleArray(array9));
