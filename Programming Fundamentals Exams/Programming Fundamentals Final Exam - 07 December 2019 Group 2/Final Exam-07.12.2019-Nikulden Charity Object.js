function solve(input) {
    let message = input.shift();

    const commandParser = {
        replace,
        cut,
        make,
        check,
        sum
    }

    for (let line of input) {
        if (line === 'Finish') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift().toLowerCase();

        commandParser[command](...tokens);
    }

    function replace(currentChar, newChar) {
        while (message.search(currentChar) !== - 1) {
            message = message.replace(currentChar, newChar);
        }
        console.log(message);
    }

    function cut(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);

        if (isValidIndex(startIndex) && isValidIndex(endIndex)) {
            message = message.substring(0, startIndex) + message.substring(endIndex + 1);
            console.log(message);
        } else {
            console.log('Invalid indexes!')
        }
    }

    function make(type) {
        if (type === 'Upper') {
            message = message.toUpperCase();
        } else {
            message = message.toLowerCase();
        }
    }

    function check(string) {
        if (message.includes(string)) {
            console.log(`Message contains ${string}`)
        } else {
            console.log(`Message doesn't contain ${string}`)
        }
    }

    function sum(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);

        if (isValidIndex(startIndex) && isValidIndex(endIndex)) {
            let sum = 0;
            let substring = message.substring(startIndex, endIndex + 1);

            for (let i = 0; i < substring.length; i++) {
                let ascii = substring.charCodeAt(i);
                sum += ascii;
            }
            console.log(sum);

        } else {
            console.log("Invalid indexes!");
        }
    }

    function isValidIndex(index) {
        return index >= 0 && index < message.length;
    }
}

solve(
    [
        'ILikeSharan',
        'Replace a e',
        'Make Upper',
        'Check SHEREN',
        'Sum 1 4',
        'Cut 1 4',
        'Finish'
    ]
)