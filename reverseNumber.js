//reversenumber
let n =-123
function reverseNumber(n){
let ncopy = n
let rev = 0;
n = Math.abs(n)
while(n>0){
    last = n%10;
    rev = (10*rev)+last
    n=Math.floor(n/10)
}
let limit = Math.pow(2,31)
if(rev < -limit || rev> limit) return 0
return (ncopy<0)? -rev : rev;
}
console.log(reverseNumber(n))