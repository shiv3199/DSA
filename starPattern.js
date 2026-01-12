let n= 5
for (i=0;i<n; i++){
    let row = '';
    for (j=0; j<n; j++){
        row+="*"
    }
    console.log(row)
}

//Output
/*
*****
*****
*****
*****
*****
*/

for (i=0; i<n; i++){
    let row ='';
    for (j=0; j<i+1; j++){
        row+= '*';
    }
    console.log(row)
}
//output
/** 
*
**
***
****
****
 */
//notes
/*
i is responsible for row but j is responsible for printing star in each row
*/

//3rd problem

for(i=0; i<n; i++){
    let row =''
    for (j=0; j<i+1; j++){
        row +=j+1
    }
    console.log(row)
}
//output
// 1
// 12
// 123
// 1234

for (i=0; i<n; i++){
    let row ='';
    for (j=0; j<i+1;j++){
        row += i+1
    }
    console.log(row)
}
/* 
input :
1
22
333
4444
*/

// problem 5th reverse number pattern

for (i=0; i<n; i++){
    let row =''
    for (j=0; j<n-i; j++){
        row += j+1
    }
    console.log(row)
}
/*
input:
12345
1234
123
12
1
*/
// Notes
// we have to see pattern how j loop is working inside 

for (i=0; i<n; i++){
    let row=''
    for (j=0; j<n-(i+1); j++){
        row+= '';
        for(k=0; k<i+1; k++){
            row+= '*'
        }
        
    }
    console.log(row)
}
