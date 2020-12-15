function tickets(args) {
    let brMan = Number(args[0]);
    let brLady = Number(args[1]);
    let brTable = Number(args[2]);
    let counter = 0;
    let manWomen = ``;
    let brGuest = brMan * brLady;

    for (let a = 1; a <= brTable; a++) {
        for (let b = 1; b <= brMan; b++) {
            for (let c = 1; c <= brLady; c++) {
                manWomen += `(${b} <-> ${c}) `;
                counter++;
                if (counter === brTable || counter === brGuest) {
                    break;
                }
            }
            if (counter === brTable || counter === brGuest) {
                break;
            }
        }
        if (counter === brTable || counter === brGuest) {
            break;
        }
    }
    console.log(manWomen);
}
tickets([2, 2, 6])