function solve(input) {
    let message = input.shift();
    input.pop();

    for (let commandLine of input) {
        let [command, firstArg, secondArg] = commandLine.split('|');

        if (command === 'ChangeAll') {
            change(firstArg, secondArg);
        } else if (command === 'Insert') {
            insert(firstArg, secondArg);
        } else if (command === 'Move') {
            move(firstArg);
        }
    }

    console.log(`The decrypted message is: ${message}`);

    function move(firstArg) {
        let numberLettersForMove = Number(firstArg);
        let firstPart = message.substring(0, numberLettersForMove);
        let secondPart = message.substring(numberLettersForMove);
        message = secondPart.concat(firstPart);
    }

    function insert(firstArg, secondArg) {
        let index = Number(firstArg);
        message = message.slice(0, index) + secondArg + message.slice(index);
    }

    function change(oldChar, newChar) {
        while (message.includes(oldChar)) {
            message = message.replace(oldChar, newChar);
        }
    }
}

solve(
    ['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']

    // ['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']

)