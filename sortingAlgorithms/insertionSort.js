"use strict";

// Insertion sorts = O(n^2)

let array = [9, 1, 8, 2, 7, 3, 6, 5, 4];

// Remember to call sorting algorithm function before printing loop...
insertionSort(array);

for (let i of array) {
  console.log(i + " ");
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
}
