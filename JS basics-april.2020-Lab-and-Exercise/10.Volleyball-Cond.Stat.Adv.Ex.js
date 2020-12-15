function solve(years, numHolideys, numWikends) {
    numHolideys = Number(numHolideys);
    numWikends = Number(numWikends);

    let broiIgriVSofia = (48 - numWikends) * (3 / 4); // брой съботни игри в София

    let broiIgriVRodenGrad = numWikends;
    let broiIgriVpraznichenDen = numHolideys * (2 / 3);
    let sum = broiIgriVSofia + broiIgriVRodenGrad + broiIgriVpraznichenDen;
    let sumV = 0;

    if (years === "leap") {
        sumV = sum * 0.15;
        console.log(Math.floor(sumV + sum));

    } else if (years === "normal") {
        console.log(Math.floor(sum))
    }
}

solve(
    "leap", 5, 2
);