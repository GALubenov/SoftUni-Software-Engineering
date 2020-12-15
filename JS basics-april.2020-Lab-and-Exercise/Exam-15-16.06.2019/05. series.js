function series(args) {
    let budget = Number(args[0]);
    let brSeriali = Number(args[1]);
    let nameFilm = "";
    let price = 0;
    let totalPrice = 0;
    let i = 2;

    for (let a = 1; a <= brSeriali; a++) {
        nameFilm = args[i];
        price = Number(args[i + 1]);

        if (nameFilm == "Thrones") {
            price = price - (price * 0.50);
        } else if (nameFilm == "Lucifer") {
            price = price - (price * 0.40);
        } else if (nameFilm == "Protector") {
            price = price - (price * 0.30);
        } else if (nameFilm == "TotalDrama") {
            price = price - (price * 0.20);
        } else if (nameFilm == "Area") {
            price = price - (price * 0.10);
        }
        totalPrice += price;
        i += 2;
    } if (budget >= totalPrice) {
        console.log(`You bought all the series and left with ${(budget - totalPrice).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${Math.abs(totalPrice - budget).toFixed(2)} lv. more to buy the series!`)
    }
}
series([25,
    6,
    "Teen Wolf",
    8,
    "Protector",
    5,
    "TotalDrama",
    5,
    "Area",
    4,
    "Thrones",
    5,
    "Lucifer",
    9
    ])