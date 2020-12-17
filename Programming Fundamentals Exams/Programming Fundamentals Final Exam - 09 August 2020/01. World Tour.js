function solve(input) {
    let text = input.shift();
    let commandLine = input.shift();

    while (commandLine !== 'Travel') {

        let [command, firstArgs, secondArgs] = commandLine.split(':');

        switch (command) {
            case 'Add Stop': {
                let index = Number(firstArgs);
                let string = secondArgs;

                if (index >= 0 && index < text.length) {
                    let firstPartsOfText = text.slice(0, index);
                    let secondPartsOfText = text.slice(index);

                    text = firstPartsOfText + string + secondPartsOfText;
                    console.log(`${text}`);
                } else {
                    console.log(`${text}`);
                }
            }
                break;

            case 'Remove Stop': {
                let startIndex = Number(firstArgs);
                let endIndex = Number(secondArgs);

                if (startIndex >= 0 && startIndex < text.length && endIndex >= 0 && endIndex < text.length) {

                    text = text.substring(0, startIndex) + text.substring(endIndex + 1, text.length);
                    console.log(`${text}`);
                } else {
                    console.log(`${text}`);
                }
            }
                break;

            case 'Switch': {
                let odlString = firstArgs;
                let newString = secondArgs;

                if (text.includes(odlString)) {
                    while (text.search(odlString) !== -1) {
                        text = text.replace(odlString, newString)
                    }
                    console.log(`${text}`);
                } else {
                    console.log(`${text}`);
                }
            }
        }

        commandLine = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${text}`);
}


solve(
    [
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',

        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ]
)