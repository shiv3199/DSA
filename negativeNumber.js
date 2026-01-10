let arr = [2, 3, 4, 5, 8, -7, -4, -5, -8];
function negativeNumber(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count +=1;
    }
  }
  return count ;
}
console.log(negativeNumber(arr));
