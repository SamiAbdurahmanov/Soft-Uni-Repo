function maxNum(arr){
    let index=1;
    let newArr=[];
    
    for(let i = 0; i<arr.length; i++){

           while(arr[i] > arr[i+index]){
                    
                    if(index+i===arr.length-1){
                            newArr.push(arr[i])  ;
                                break;
                    }
                    index++;
           }
           index=1;
            
    }
    newArr.push(arr[arr.length-1])
    console.log(newArr.join(" "));
}
 maxNum([14, 24, 3, 19, 15, 17])