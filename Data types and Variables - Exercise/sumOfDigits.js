function sumOfDigits(number){
    let numToString = String(number);
    let sum = 0;
for(let i = 0; i<numToString.length; i++){
    let char=numToString[i];
   
    sum+= Number(char);

}
console.log(sum);
}
sumOfDigits(245678)