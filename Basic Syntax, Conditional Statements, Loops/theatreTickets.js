function theatreTickets(day, age){
    let sum=0;
    let flag=false;
    if(age>=0&&age<=18){
        switch (day) {
            case 'Weekday': sum=12; break;
            case 'Weekend': sum = 15; break;
            case 'Holiday': sum = 5; break;
        }
    }
    else if(age>18&&age<=64){
        switch (day) {
            case 'Weekday': sum=18; break;
            case 'Weekend': sum = 20; break;
            case 'Holiday': sum = 12; break;
        }
    }
    else if(age>64&&age<=122){
        switch (day) {
            case 'Weekday': sum=12; break;
            case 'Weekend': sum = 15; break;
            case 'Holiday': sum = 10; break;
        }
    }
    else{
        console.log('Error!');
        flag=true;
    }
    if(!flag){
        console.log(`${sum}$`);
    }
    
}
theatreTickets('Holiday', -12)
theatreTickets('Weekday',

42)