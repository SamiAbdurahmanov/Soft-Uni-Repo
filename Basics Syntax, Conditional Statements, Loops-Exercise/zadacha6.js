function printAndSum(n,m){
    let sum=0;
    let buff='';
    for(let i = n; i<=m; i++){
        if(i===m){
            buff+=i + '';
        }else{
            buff+=i + ' ';
        }
      
       sum+=i;
    }
    console.log(buff);
    console.log(`Sum: `+sum);
}
printAndSum(5, 10 )