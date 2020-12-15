function solve(args) {
    let x1 = args[0];
    let y1 = args[1];
    let x2 = args[2];
    let y2 = args[3];
    let x = args[4];
    let y = args[5];

    if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
        console.log(`Inside`);
    } else {
        console.log(`Outside`);
    }
}
solve([2, -3, 12, 3, 8, -1])