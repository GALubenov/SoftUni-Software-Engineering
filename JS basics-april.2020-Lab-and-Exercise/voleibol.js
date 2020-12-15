function voleibol(input) {
    let years = input[0];
    let broiPraznichniDni = Number(input[1]);
    let pytuvaniqVrodenGrad = Number(input[2]);
    let wikendi = 48;
    let wikendiVSofia = wikendi - pytuvaniqVrodenGrad;
    let broiIgriVSofia = wikendiVSofia * (3 / 4);
    let broiIgriVRodenGrad = pytuvaniqVrodenGrad;
    let broiIgriVpraznichenDen = broiPraznichniDni * (2 / 3);
    let sum = broiIgriVSofia +
        broiIgriVRodenGrad +
        broiIgriVpraznichenDen;
    let sumV = 0;

    if (years === "leap") {
        sumV = sum * 0.15;
        console.log(Math.floor(sumV + sum));

    } else if (years === "normal") {
        console.log(sum)
    }

}
voleibol(["leap", 5, 2]);