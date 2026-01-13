let num = 123;


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
    let rev =reverseNumber(num)
    if(rev === num){
        return true
    }
    return false

}

console.log(reverseNumber(num))
console.log(checkPalindrome(num))