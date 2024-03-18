"use strict";

// Selection sort = O(n^2)

let array = [9, 1, 8, 2, 7, 3, 6, 4, 5];

selectionSort(array);

for (let i of array) {
  console.log(i + " ");
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        // if changed from greater than to less than it goes from ascending to descending
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}
