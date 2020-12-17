function solve(input) {
    let message = input.shift();

    for (let line of input) {
        let [command, index1, index2] = line.split(':|:');
        if (command === 'Reveal') {
            break;
        } else if (command === 'ChangeAll') {
            change(index1, index2);
        } else if (command === 'Reverse') {
            reverse(index1);
        } else if (command === 'InsertSpace') {
            insertSpace(index1);
        }
    }

    function change(subs, replace) {
        message = message.split(subs).join(replace);
        console.log(message);
    }

    function reverse(command) {
        let indexOfMatched = message.indexOf(command)
        
        if (indexOfMatched !== -1) {
            let matched = message
                .substr(indexOfMatched, command.length)
                .split('')
                .reverse()
                .join('');

            let end = indexOfMatched + matched.length;
            message = message.substring(0, indexOfMatched) + message.substring(end, message.length) + matched;
            console.log(message);
        } else {
            console.log('error');
        }
    }

    function insertSpace(index) {
        index = Number(index);
        let currentMessage = message.split('')
        currentMessage.splice(index, 0, ' ');
        message = currentMessage.join('');

        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);
}

solve(
    //['heVVodar!gnil',
    //    'ChangeAll:|:V:|:l',
    //    'Reverse:|:!gnil',
    //    'InsertSpace:|:5',
    //    'Reveal']
    [
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ]
)