function solve(input) {
    let message = input.shift();

    let actions = {
        InsertSpace: (index) => {
            index = Number(index);
            let firstPart = message.slice(0, index);
            let secondPart = message.slice(index);
            message = firstPart + ' ' + secondPart;
            console.log(message);
        },
        Reverse: (substring) => {
            let index = message.indexOf(substring);
            let index2 = index + substring.length;
            if (index != -1) {
                let temp = message.slice(index, index2).split('').reverse().join('');
                let firstPart = message.slice(0, index);
                let secondPart = message.slice(index2);
                message = firstPart + secondPart + temp;
                console.log(message);

            } else {
                console.log('error')
            }
        },
        ChangeAll: (substring, replacement) => {
            while (message.includes(substring)) {
                message = message.replace(substring, replacement)
            }
            console.log(message);
        }
    }

    let line = input.shift();
    while (line != 'Reveal') {
        let [command, args1, args2] = line.split(':|:');
        actions[command](args1, args2);
        line = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

solve(['heVVodar!gnil', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal'])
solve(['Hiware?uiy', 'ChangeAll:|:i:|:o', 'Reverse:|:?uoy', 'Reverse:|:jd', 'InsertSpace:|:3', 'InsertSpace:|:7', 'Reveal'])