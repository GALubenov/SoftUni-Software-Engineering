function baking(args) {
    let brUchasnici = Number(args[0]);
    let name = 0;
    let totalCake = 0;
    let brCookies = 0;
    let brCakes = 0;
    let brWaffles = 0;

    let sumCookies = 0;
    let sumCakes = 0;
    let sumWaffles = 0;
    let totalSum = 0;

    let index = 1;
    let comm = args[index];
    for (let i = 1; i <= brUchasnici; i++) {
        name = comm;
        let cookies = 0;
        let cakes = 0;
        let waffles = 0;
        while (comm !== "Stop baking!") {
            if (comm == "cookies") {
                cookies = Number(args[index + 1]);
                brCookies += cookies;
                sumCookies += cookies * 1.50;
            } if (comm == "cakes") {
                cakes = Number(args[index + 1]);
                brCakes += cakes;
                sumCakes += cakes * 7.80;
            } if (comm == "waffles") {
                waffles = Number(args[index + 1]);
                brWaffles += waffles;
                sumWaffles += waffles * 2.30;
            }
            index++;
            comm = args[index];
        }
        console.log(`${name} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
        index++;
        comm = args[index];
    }
    totalCake = Number(brCookies + brCakes + brWaffles);
    totalSum = Number(sumCookies + sumCakes + sumWaffles);
    console.log(`All bakery sold: ${totalCake}`);
    console.log(`Total sum for charity: ${totalSum.toFixed(2)} lv.`);
}
baking([3, "George", "cookies", 10, "Stop baking!",
    "Annie", "waffles", 8, "Stop baking!",
    "Ivan", "cookies", 6, "waffles", 3, "Stop baking!"
])