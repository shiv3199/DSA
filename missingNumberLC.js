    function rangeFind(arr){
    let range = arr.length
    let sum = 0
    let arrsum=0
    for(i=0; i<arr.length; i++){
        if(arr[i]>range){
            range = arr[i]
        }
        
    }
    for(i=0; i<=range; i++){
            sum+=i
        }
    for(i=0;i<arr.length;i++){
      arrsum += arr[i]
    }
    return sum-arrsum
    }
    
    let arr = [1,3]
    console.log(rangeFind(arr))