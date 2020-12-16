function solve(input) {
    let obj = {};
    let participants = input.shift().split(', ').forEach((el) => obj[el] = 0);

    let patternDigit = /\d+/g;
    let patternName = /[A-Za-z]+/g;

    let line = input.shift();
    while (line !== 'end of race') {
        let digit = line.match(patternDigit).join('').split('').map(Number).reduce((acc, v) => { return acc += v }, 0);
        let name = line.match(patternName).join('');

        if (obj.hasOwnProperty(name)) {
            obj[name] += digit;
        }

        line = input.shift();
    }

    let entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${entries[0][0]}`);
    console.log(`2nd place: ${entries[1][0]}`);
    console.log(`3rd place: ${entries[2][0]}`);
}

solve(['George, Peter, Bill, Tom', 'G 4 e @ 55 or % 6 g 6 ! 68 e !!@', 'R1@!3a$y4456@',
    'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race'])