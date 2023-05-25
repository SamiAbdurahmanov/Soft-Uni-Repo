function vacation(people, group, day) {
    let price = 0;
      let total=0;
    if (group === 'Students') {
        switch (day) {
            case 'Friday': price = 8.45; break;
            case 'Saturday': price = 9.8; break;
            case 'Sunday': price = 10.46; break;
        }
    }
    else if (group === 'Business') {
        switch (day) {
            case 'Friday': price = 10.9; break;
            case 'Saturday': price = 15.6; break;
            case 'Sunday': price = 16; break;
        }
    }
    else if (group === 'Regular') {
        switch (day) {
            case 'Friday': price = 15; break;
            case 'Saturday': price = 20; break;
            case 'Sunday': price = 22.5; break;
        }
    }
   total = price * people;
    if (people >= 30 && group === "Students") {
       total = total - (total * 0.15);
      
    }
    else if (people >= 100 && group === 'Business') {
        people=people-10;
        total=price*people;
      
    }
    else if (people >= 10 && people <= 20 && group === 'Regular') {
        total = total - (total * 0.05);
    
    }
    
    console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(10,
    "Regular",
    "Sunday"
    )