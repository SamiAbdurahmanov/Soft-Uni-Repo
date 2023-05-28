function gladiatorExpenses(losts, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBroke = 0, swordBroke = 0, shieldBroke = 0, armorBroke = 0;
    let counter = 0;
    for (let singleBattleLost = losts; singleBattleLost > 0; singleBattleLost--) {

        if (singleBattleLost % 6 === 0  ) {
            shieldBroke++;
        }
        if (shieldBroke !== 0) {
            if (shieldBroke % 2 === 0) {

                if (counter !== shieldBroke) {
                    armorBroke++;
                    counter += 2;
                }

            }
        }

        if (singleBattleLost % 2 === 0) {
            helmetBroke++;
        }
        if (singleBattleLost % 3 === 0) {
            swordBroke++;
        }

    }

    let sum = (shieldBroke * shieldPrice) + (swordBroke * swordPrice) + (armorPrice * (armorBroke)) + (helmetBroke * helmetPrice);
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(

    23,
    12.50,
    21.50,
    40,
    200

)
