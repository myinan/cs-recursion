// Build a function "mergeSort" that takes in an array and returns a sorted array,
// using a recursive merge sort methodology.
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  // Add remaining elements from both halves
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Example usage:
const unsortedArray = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
