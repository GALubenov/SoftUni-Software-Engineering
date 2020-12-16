function solve(input) {

    let message = input.shift();

    let actions = {
        Move: (num) => {
            num = Number(num);
            let first = message.slice(0, num);
            let second = message.slice(num);
            message = second + first;

        },
        Insert: (index, value) => {
            index = Number(index);
            let first = message.slice(0, index);
            let second = message.slice(index);
            message = first + value + second;
        },
        ChangeAll: (sbs, replacement) => {
            while (message.includes(sbs)) {
                message = message.replace(sbs, replacement);
            }
        }
    }

    let line = input.shift();
    while (line != 'Decode') {
        let [command, args1, args2] = line.split('|');
        actions[command](args1, args2);
        line = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])

solve(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode'])
