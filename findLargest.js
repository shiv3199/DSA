let arr=[1,5,48,56,7]
function largestNumber(array){
    //let large=0;
    // let large= -Infinity
    let large = array[0]
    for(i=0; i<array.length; i++){
        if(array[i]>large){
            large = array[i]
        }
    }
    return large
}
console.log(largestNumber(arr))