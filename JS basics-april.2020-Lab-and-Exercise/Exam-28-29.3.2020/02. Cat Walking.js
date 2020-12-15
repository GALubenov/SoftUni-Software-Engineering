function solve(input) {

    let burnCallories = ((+input[0] * +input[1]) * 5);
    let eatCallories = +input[2];
    let neededCall = +input[2] / 2

    if (burnCallories >= neededCall) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCallories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCallories}.`);
    }
}


solve(
    [40, 2, 300]
)