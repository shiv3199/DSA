//function return index
let arr=[4,24,5,6]
function findIndex(arr,num){
    for(let i= 0; i<arr.length;i++){
        if(arr[i]==num){
            return i;
        } 
    }
    return -1
}
console.log(findIndex(arr,62))