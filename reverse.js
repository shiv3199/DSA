//reverse array of strings
//s=['i','g','h','e','e']
//swap the array strings


let a =['s','h','i','v','a','m']
let len=a.length;
let half = Math.floor(len/2)
for (let i=0; i<half; i++){
    let temp = a[i];
    a[i] = a[len-1-i]
    a[len-1-i]=temp
}
console.log(a)