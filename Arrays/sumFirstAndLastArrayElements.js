function sumFirstAndLastArrayElements(arr){
    let firstIndex = arr[0];
    let lastIndex = arr[arr.length -  1];
    let sum = firstIndex + lastIndex;
    console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);