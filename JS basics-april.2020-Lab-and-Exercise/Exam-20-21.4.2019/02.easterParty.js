function party(args) {
    let na4alenBudget = Number(args[2]);
    let priceOfCake = na4alenBudget * 0.1;
    let brGuests = Number(args[0]);
    let priceKuvertOnePerson = Number(args[1]);

    let sumOfParty = 0;

    if (brGuests >= 1 && brGuests < 10) {
        priceKuvertOnePerson = priceKuvertOnePerson * brGuests;
        sumOfParty = priceKuvertOnePerson + priceOfCake;
    }
    else if (brGuests >= 10 && brGuests <= 15) {
        priceKuvertOnePerson -= priceKuvertOnePerson * 0.1;
        priceKuvertOnePerson = priceKuvertOnePerson * brGuests;
        sumOfParty = priceKuvertOnePerson + priceOfCake;
    }
    else if (brGuests > 15 && brGuests <= 20) {
        priceKuvertOnePerson -= priceKuvertOnePerson * 0.2;
        priceKuvertOnePerson = priceKuvertOnePerson * brGuests;
        sumOfParty = priceKuvertOnePerson + priceOfCake;
    }
    else if (brGuests > 20) {
        priceKuvertOnePerson -= priceKuvertOnePerson * 0.25;
        priceKuvertOnePerson = priceKuvertOnePerson * brGuests;
        sumOfParty = priceKuvertOnePerson + priceOfCake;
    }
    if (sumOfParty <= na4alenBudget) {
        console.log(`It is party time! ${(Math.abs(na4alenBudget - sumOfParty)).toFixed(2)} leva left.`)
    }
    else {
        console.log(`No party! ${Math.abs(sumOfParty - na4alenBudget).toFixed(2)} leva needed.`)
    }
}
party([24,
    35,
    550
    
])