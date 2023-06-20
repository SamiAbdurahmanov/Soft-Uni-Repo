function condenseArrayToNumber(arr){
    let newArr ;
 if(arr.length==1){
    console.log(arr[0]);
 }
 else{
    newArr = [];
    let temp=0;
    let tempPlusOne=0;
    let sum = 0;
    let index = arr.length;
    while(index>1){
        newArr=[];
        for(let i = 0 ; i<index; i++){
            if(i+1<index ){
                temp = arr[i];
                tempPlusOne = arr[i+1];
                sum = temp+tempPlusOne;
                newArr.push(sum);
            }
         

        }
        index=newArr.length;
        arr=newArr;
    }
    console.log(newArr[0]);
 }
 
}
condenseArrayToNumber([2])