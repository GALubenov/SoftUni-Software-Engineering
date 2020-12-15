function tennis(args) {
    let brTurniri = Number(args[0]);
    let na4alenBrTo4ki = Number(args[1]);
    let i = 2;
    let comm = args[i];
    let w = 0;
    let f = 0;
    let sf = 0;
    let finalPonts = 0;
    let averagePoints = 0;
    let spe4eleniTurniri = 0;

    while (i <= brTurniri + 1) {

        if (comm == "W") {
            w += 2000;
            spe4eleniTurniri++;
        } if (comm == "F") {
            f += 1200;
        } if (comm == "SF") {
            sf += 720;
        }
        i++;
        comm = args[i];
    }
    finalPonts = (w + f + sf) + na4alenBrTo4ki;
    averagePoints = (w + f + sf) / brTurniri;
    spe4eleniTurniri = (spe4eleniTurniri / brTurniri)*100;
    console.log(`Final points: ${finalPonts}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${spe4eleniTurniri.toFixed(2)}%`);
}
tennis([7, 1200, "SF", "F", "W", "F", "W", "SF", "W"])
