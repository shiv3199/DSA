let num = 259;
let count =0 ;

function countdigit(num){
    while(num>0){
        num=Math.floor(num/10);
        count++
    }
    return count
}

console.log(countdigit(25946484321313))

//input 1234 -> 4
/*
math.floor used for because its down the number to integer

if 
259/10 = its give 25.9
but using math.floor its give 25

*/
