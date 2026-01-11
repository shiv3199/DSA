let arr = [4, 5, 7, 1, 6, 8, 4, 9];

function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest(arr));
