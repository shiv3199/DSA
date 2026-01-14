let num = 321;


function reverseNumber(num){
    let rev = 0;
    while (num>0){
        rem = num%10;
        rev= (10*rev)+rem;
        num = Math.floor(num/10)
    }
    return rev
}
function checkPalindrome(num){
    if(num<0) return false
    let rev =reverseNumber(num)
    if(rev === num){
        return true
    }
    return false

}

console.log(reverseNumber(num))
console.log(checkPalindrome(num))

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(n) {
//     if(n<0) return false

//     let nCopy = n
//     let rev = 0
//     while(n>0){
//         rem = n%10;
//         rev = (10*rev)+rem
//         n = Math.floor(n/10);
//     }
//     return rev
//         if(nCopy === rev){
//             return true
//         }
//         else{
//             return false
//         }
    
// };
// console.log(isPalindrome(10))