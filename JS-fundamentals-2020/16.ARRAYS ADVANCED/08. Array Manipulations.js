function solve(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(Number);

    for (let line of input) {
        let [command, firstArg, secondArg] = line.split(' ');
        firstArg = Number(firstArg);
        secondArg = Number(secondArg);

        switch (command) {
            case 'Add': {
                arr.push(firstArg);
            }
                break;

            case 'Remove': {
                let index = arr.indexOf(firstArg);
                if (index > 0) { arr.splice(index, 1) };
            }
                break;

            case 'RemoveAt': {
                arr.splice(firstArg, 1)
            }
                break;

            case 'Insert': {
                arr.splice(secondArg, 0, firstArg);
            }
                break;
        }
    }

    console.log(arr.join(' '))
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)