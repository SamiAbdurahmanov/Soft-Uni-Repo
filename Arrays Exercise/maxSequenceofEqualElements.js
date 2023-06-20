function maxS(arr) {
   let newArr = [];
   let maxArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
         newArr.push(arr[i]);
         if (arr[i + 1] !== arr[i + 2]) {
            newArr.push(arr[i + 1]);
            if (newArr.length > maxArr.length) {
               maxArr = newArr;
                 newArr=[];
            }
            if(newArr.length === maxArr.length){
               newArr=[];
            }
         }
      }
   }
   console.log(maxArr.join(' '));
}
maxS([0, 1, 1, 5, 2, 2, 6, 3, 3])