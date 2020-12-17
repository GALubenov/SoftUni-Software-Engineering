function solve(input) {
    let arr = input.shift().split(' ');
    let line = input.shift();

    while (line !== 'end') {

        let [command, firstIndex, secondIndex] = line.split(' ');
        firstIndex = Number(firstIndex)
        secondIndex = Number(secondIndex)

        switch (command) {
            case 'swap': {
                let a = arr[firstIndex];
                let b = arr[secondIndex];
                arr[firstIndex] = b;
                arr[secondIndex] = a;
                break;
            }

            case 'multiply': {
                let a = arr[firstIndex];
                let b = arr[secondIndex];
                arr[firstIndex] = a * b;
                break;
            }

            case 'decrease': {

                for (let i = 0; i < arr.length; i++) {

                    arr[i] = Number(arr[i]) - 1;
                }
                break;
            }
        }

        line = input.shift()
    }

    console.log(arr.join(', '))

}

solve(
    [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]


    // [
    //    '1 2 3 4',
    //    'swap 0 1',
    //    'swap 1 2',
    //    'swap 2 3',
    //    'multiply 1 2',
    //    'decrease',
    //    'end'
    //  ]

)