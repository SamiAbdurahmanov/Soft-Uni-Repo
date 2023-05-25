function login(input) {
    let indexForArray = 0;
    let username = input[indexForArray];
    indexForArray++;
    let pass = input[indexForArray];
    indexForArray++;
    let correctPass = '';
    let letter = '';
    let index = 0;

    let flag = false;
    for (let i = username.length - 1; i >= 0; i--) {
        letter = username[i];
        correctPass += letter;

    }
    while (correctPass !== pass) {
        if (index === 3) {
            console.log(`User ${username} blocked!`);
            flag = true;
            break;

        }
        pass = input[indexForArray];
        indexForArray++;
        index++;
        console.log('Incorrect password. Try again.');//0 1 2 3


    }


    if (!flag) {
        console.log(`User ${username} logged in.`);
    }

}
//login(['sunny','rainy','cloudy','sunny','not sunny']);
login(['Acer', 'login', 'go', 'let me in', 'recA'])
