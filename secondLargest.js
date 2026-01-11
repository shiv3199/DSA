let arr = [4, 5, 7, 1, 6,8, 8, 4, 9,9];

function secondLargest(arr) {
    if(arr.length<2){
        return null
    }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i]!== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest(arr));

//corner cases of this problem 
/*
1. if array is empty
2. if array had only one element
3. if array had negative number 
4. if array had duplicate value

This solution has all possible solution.

*/