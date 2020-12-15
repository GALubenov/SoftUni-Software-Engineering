function lemonade(args) {
    let kgLemone = Number(args[0]);
    let kgSugar = Number(args[1]);
    let lWater = Number(args[2]);
    let totalLemonJuice = kgLemone * 980;
    let totalLemonade = totalLemonJuice + (lWater * 1000) + (kgSugar * 0.30);
    let soldCup = totalLemonade / 150;
    let profit = Math.floor(soldCup) * 1.20;
    console.log(`All cups sold: ${Math.floor(soldCup)}`);
    console.log(`Money earned: ${(profit).toFixed(2)}`);
}
lemonade([5, 3.5, 5])