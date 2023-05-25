function bitcoinMining(input){
    let index=0;
    let gold=Number(input[index]);
    index++;
    let lastLoop=false;
    let bitcoin = 11949.16;
    let oneGram=67.51;
    let sum=0;
    let total = 0;
    let counterOfBitcoins=0;
    let day;
    let flag=false;
    for(let i = 1;i<=input.length; i++ ){
        
      
      
        
        sum=0;
        
        if(i%3===0){
           sum=(oneGram*gold) - ((oneGram*gold) * 0.3);
           total+=sum;
        }
        else{
            sum=(oneGram*gold);
            total+=sum;
        }
        if(total>=bitcoin){
            for(;total>=bitcoin;total-=bitcoin){
                counterOfBitcoins++;
                flag=true;
              if(counterOfBitcoins===1){
                day=i;
              }
            }
           
         
        }
        gold=Number(input[index]);
        index++;
    }
    console.log(`Bought bitcoins: ${counterOfBitcoins}`);
    if(flag){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
   
    console.log(`Left money: ${total.toFixed(2)} lv.`);
}
bitcoinMining([3124.15,
    504.212,
    2511.124])