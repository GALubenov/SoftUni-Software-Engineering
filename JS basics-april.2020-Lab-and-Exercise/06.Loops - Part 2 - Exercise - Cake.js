function solve(input) {
    let width = +input.shift();
    let length = +input.shift();
    let cake = width * length;

    let i = 0;
    let numPieces = 0;
    while (input[i] !== 'STOP') {
        numPieces += +input[i];

        if (numPieces >= cake) {
            console.log(`No more cake left! You need ${numPieces - cake} pieces more.`);
            break;
        }

        i++;
    }

    if (cake > numPieces) {
        console.log(`${cake - numPieces} pieces are left.`);
    }
}

solve(
    // [
    //     10,
    //     10,
    //     20,
    //     20,
    //     20,
    //     20,
    //     21
    // ]

    [
        10,
        2,
        2,
        4,
        6,
        'STOP'

    ]

)