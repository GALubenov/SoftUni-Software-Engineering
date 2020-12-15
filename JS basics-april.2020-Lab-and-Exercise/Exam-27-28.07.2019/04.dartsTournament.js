function darts(args) {
    let points = Number(args[0]);
    let length = args.length - 1;

    let i = 1;
    let comm = args[i];
    let counter = 0;
    while (i <= length) {
        if (comm == "number section") {
            i++;
            comm = Number(args[i]);
            points -= comm;
            counter++;
        } else if (comm == "double ring") {
            i++;
            comm = Number(args[i]);
            points -= (comm * 2);
            counter++;
        } else if (comm == "triple ring") {
            i++;
            comm = Number(args[i]);
            points -= (comm * 3);
            counter++;
        } else if (comm == "bullseye") {
            counter++;
            console.log(`Congratulations! You won the game with a bullseye in ${counter} moves!`);
            return;
        }
        if (points <0){
             console.log(`Sorry, you lost. Score difference: ${Math.abs(points)}.`);
             break;
        }
        i++;
        comm = args[i]
    }
    if (points >= 0) {
        console.log(`Congratulations! You won the game in ${counter} moves!`);
    }
}
darts([75,
    "triple ring",
    17,
    "number section",
    16,
    "triple ring",
    13,
    "double ring",
    10
    
    ])