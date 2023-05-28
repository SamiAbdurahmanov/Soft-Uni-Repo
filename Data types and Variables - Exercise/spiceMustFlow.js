function spiceMustFlow(yeild) {
     let dayCounter = 0;
     let consumedSpice = 0;
     let spice = yeild;
     let sum=0;
     let sumYeild = 0;
     for (let i = yeild; i>=100; i-=10){
        dayCounter++;
     
      
         sumYeild+=i;
        sumYeild -=26;
        sum += sumYeild;
        sumYeild =0;
     }
     if(sum>=26){
        sum-=26;
    }
    
    console.log(dayCounter);
    console.log(sum);

}
spiceMustFlow(450)