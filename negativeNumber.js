let arr = [2,3,4,5,8,-7]
function negativeNumber(arr,num){

for (i=0; i<arr.length; i++){
    if(arr[i]<0){
        return i
    }
}
return 0
}
console.log(negativeNumber(arr,-7))