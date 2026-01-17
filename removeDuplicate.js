let a = [0,1,2,2,2,3,3,4]
function remove(num){
let x=0;
for(let i =0; i<num.length; i++){
    if(num[i]>num[x]){
        x=x+1;
        num[x]=num[i]
    }
}
return x+1;
}

console.log(remove(a))