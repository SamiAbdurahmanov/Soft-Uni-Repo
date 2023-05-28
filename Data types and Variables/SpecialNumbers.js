function specialNumbers(n){
    let sumOfOneNum = 0;
    for(let i =1; i<=n; i++){
        
        let currentNum = String(i)
        sumOfOneNum = 0;
        for(let j = 0 ; j<currentNum.length;j++){
        
            let char = Number(currentNum[j]);
            sumOfOneNum += char;
            
        }
        if(sumOfOneNum===5||sumOfOneNum===7||sumOfOneNum===11){
            console.log(`${i} -> True`);
        }
        else{
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(15)