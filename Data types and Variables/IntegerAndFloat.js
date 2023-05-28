function integerAndFloat(num1,num2,num3){
    let sum = num1 + num2 + num3;
    let flag = false;
    let point;
    let str = String(sum);
    for(let i = 0; i<str.length;i++){
        let currentChar=str[i];
        if(currentChar === '.'){
           point='Float';
           flag=true
           break;
        }
    }
    if(!flag){
        point = 'Integer';
    }
    console.log(sum + ' - ' + point);
}
integerAndFloat(9, 100, 1.1)