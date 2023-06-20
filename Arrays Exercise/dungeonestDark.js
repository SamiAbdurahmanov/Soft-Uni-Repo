function dungeonestDark(arr){
let helth = 100;
let coins = 0;
let sum = [];
let str = arr[0];
    let strL = arr[0].length;
    for(let i = 0; i<strL; i++){
        if(str[i]!=="|"){
               sum+=str[i];
        }
        else{
            sum+=",";
        }
    }
       
console.log(sum);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])                                     