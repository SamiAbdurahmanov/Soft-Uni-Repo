function magicSum(arr, num){
 for(let i = 0; i<arr.length; i++){
    for(let c = i+1; c<=arr.length; c++){
        if((arr[i] + arr[c])===num){
            console.log(arr[i], arr[c]);
        }
    }
 }
}
 