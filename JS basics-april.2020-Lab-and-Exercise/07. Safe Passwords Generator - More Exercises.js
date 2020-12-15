function solve(input) {
    let a = +input[0];
    let b = +input[1];
    let maxPass = +input[2];
    let maxA = 0;
    let maxB = 0;
    let string = '';
    let counter = 0;
    let first = 35;
    let second = 64;

    for (let k = 1; k <= a; k++) {
        maxA = k;
        for (let m = 1; m <= b; m++) {
            maxB = m;
            counter++;

            string += `${String.fromCharCode(first)}${String.fromCharCode(second)}${k}${m}${String.fromCharCode(second)}${String.fromCharCode(first)}|`;

            if (counter === maxPass || a === maxA && b === maxB) {
                break;
            }

            first++;
            if (first > 55) {
                first = 35;
            }
            second++;
            if (second > 96) {
                second = 64;
            }
            
        }

        if (counter === maxPass || a === maxA && b === maxB) {
            break;
        }
    }
    console.log(`${string}`);
}

solve([2, 3, 10]);

