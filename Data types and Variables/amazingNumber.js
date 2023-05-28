function amazingNumber(number){
 let numberToString = String(number);
 let sum = 0;
 let flag = false;
 for(let i = 0; i<numberToString.length; i++){
    let currentChar = numberToString[i];
    let currentCharToNumber = Number(currentChar);
    sum+=currentCharToNumber;
 }
  let sumToString = String(sum);
  for(let i = 0; i<sumToString.length; i++){
    let currentChar = sumToString[i];
    if(currentChar==='9'){
        flag = true;
    }
  }
  if(!flag){
    console.log(`${number} Amazing? False`);
  }
  else{
    console.log(`${number} Amazing? True`);
  }

}amazingNumber(999)