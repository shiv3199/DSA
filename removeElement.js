// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

let num = [1,2,2,3,4,6,8,2,2,4]
let val = 2

function removeElement (num, val ){
    let x=0;
    for (let i=0; i<num.length; i++){
        if(num[i] !== val){
            num[x]=num[i]
            x +=1
        }
    }
return x
}

console.log(removeElement(num,val))
console.log(num)