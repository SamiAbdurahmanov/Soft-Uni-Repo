function reverseAnArray( n, arr){
    let buff = [];
 for(let i = n; i>0; i--){
   buff.push(arr[i-1]);
    
 }
 console.log(buff.join(' '));
}
reverseAnArray(5, [10, 20, 30, 40, 50, 90])