let arr = [11,26,55,98,4]
function smallestNumber(arr){
let smallest = arr[0]
for(i=0; i<arr.length; i++){
    if(arr[i]<smallest){
        smallest = arr[i]
    }
}
return smallest
}
console.log(smallestNumber(arr))