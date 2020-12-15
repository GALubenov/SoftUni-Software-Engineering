function guest(args) {
    let brGuest = Number(args[0]);
    let budget = Number(args[1]);

    let oneBrKozunak = 4;
    let oneBrEgg = 0.45;

    let brNeobhodimiKozunaci = Math.ceil(brGuest / 3);
    let brNeobhodimiEggs = brGuest * 2;

    let priceKozunaci = brNeobhodimiKozunaci * oneBrKozunak;
    let priceEggs = brNeobhodimiEggs * oneBrEgg;

    let sum = priceKozunaci + priceEggs;

    if (sum <= budget) {
        console.log(`Lyubo bought ${brNeobhodimiKozunaci} Easter bread and ${brNeobhodimiEggs} eggs.`)
        console.log(`He has ${(budget - sum).toFixed(2)} lv. left.`)
    } else {
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${Math.abs(sum - budget).toFixed(2)} lv. more.`)
    }
}
guest([9, 12])