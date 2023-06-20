
function equalSum(arr){
    let arrl=arr.length;
    let foundI = "no";
    for(let i = 0; i<arrl; i++){
        let leftSum=0, rightSum = 0;
        for(let l = 0; l<i; l++){
            leftSum+=arr[l];
        }
        for(let r = i+1; r<arrl; r++){
            rightSum+=arr[r];
        }
         if(leftSum===rightSum){
            foundI=i;
          
         }
    }
    console.log(foundI);
}
equalSum([1, 2, 3, 3])