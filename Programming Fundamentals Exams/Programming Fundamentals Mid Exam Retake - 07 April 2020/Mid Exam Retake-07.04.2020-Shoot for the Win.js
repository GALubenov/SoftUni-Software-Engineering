function solve(input) {
    let targets = input.shift().split(' ').map(Number);
    let count = 0;

    for (let line of input) {
        if (line === 'End') {
            break;
        }

        let tokens = Number(line)

        if (tokens >= 0 && tokens < targets.length) {
            count++;

            let temp = targets[tokens];

            targets.splice(tokens, 1, -1)

            for (let i = 0; i < targets.length; i++) {
                if (targets[i] > temp) {
                    targets[i] -= temp;

                } else if (targets[i] > 0 && targets[i] <= temp) {
                    targets[i] += temp;
                }
            }
        }
    }
console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

solve(
   // ['24 50 36 70', '0', '4', '3', '1', 'End']

    [ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]
)