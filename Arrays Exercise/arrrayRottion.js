function arrayRotation(arr, num){
     while(num>0){
        let element = arr.shift();
        arr.push(element);
        num--;
     }
     console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);