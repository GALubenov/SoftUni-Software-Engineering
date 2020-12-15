function solve(input) {
    let sum = 0;
    let i = 0;

    while (input[i] !== 'End') {
        let destination = input[i];
        let budget = input[i + 1];

        let j = i + 2;
        let command = +input[j];
        while (command) {
            sum += command;

            j++;
            command = +input[j];
            i++;
        }
        console.log(`Going to ${destination}!`);
        i+=2; 
    }
}

solve(
   // ['Greece', 1000, 200, 200, 300, 100, 150, 240, 'Spain', 1200, 300, 500, 193, 423, 'End']
    ['France',
        2000,
        300,
        300,
        200,
        400,
        190,
        258,
        360,
        'Portugal',
        1450,
        400,
        400,
        200,
        300,
        300,
        'Egypt',
        1900,
        1000,
        280,
        300,
        500,
        'End'
        ]
)