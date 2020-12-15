function summer(args) {
    let budget = Number(args[0]);
    let plajnaHavliqPrice = Number(args[1]);
    let otstypka = Number(args[2]) / 100;

    let umbrelaPrice = (2 / 3) * plajnaHavliqPrice;
    let shoosePrice = umbrelaPrice * 0.75;
    let plajna4anta = (1 / 3) * (plajnaHavliqPrice + shoosePrice);
    let price = plajnaHavliqPrice + umbrelaPrice + shoosePrice + plajna4anta;
    let totalPrice = price - (price * otstypka);
    let leftSum = budget - totalPrice;

    if (leftSum >= 0) {
        console.log(`Annie's sum is ${totalPrice.toFixed(2)} lv. She has ${leftSum.toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${totalPrice.toFixed(2)} lv. She needs ${Math.abs(leftSum).toFixed(2)} lv. more.`);
    }
}
summer(
    //[30, 17, 3]
   // [40,15,5]
    [25,6,10]
    );