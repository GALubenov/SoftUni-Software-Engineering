function solve(input) {
    input.pop();
    let weapon = input.shift().split('|');

    const moveLeft = (index) => {
        let tempIndex = index - 1;

        if (index >= 0 && index < weapon.length && tempIndex >= 0) {
            let temp = weapon[tempIndex];
            weapon[tempIndex] = weapon[index];
            weapon[index] = temp;
        }
    }

    const moveRight = (index) => {
        let tempIndex = index + 1;

        if (index >= 0 && index < weapon.length && tempIndex < weapon.length) {
            let temp = weapon[tempIndex];
            weapon[tempIndex] = weapon[index];
            weapon[index] = temp;
        }
    }

    const checkEven = () => {
        let output = '';

        for (let i = 0; i < weapon.length; i += 2) {
            output += `${weapon[i]} `;
        }
        console.log(output.trim());
    }

    const checkOdd = () => {
        let output = '';

        for (let i = 1; i < weapon.length; i += 2) {
            output += `${weapon[i]} `;
        }
        console.log(output.trim());
    }

    for (let line of input) {
        let tokens = line.split(' ');
        let command = `${tokens[0]} ${tokens[1]}`;

        if (command === 'Move Left') {
            moveLeft(Number(tokens[2]));
        } else if (command === 'Move Right') {
            moveRight(Number(tokens[2]));
        } else if (command === 'Check Even') {
            checkEven();
        } else if (command === 'Check Odd') {
            checkOdd();
        }
    }

console.log(`You crafted ${weapon.join('')}!`);
}

solve(
    [
        'ri|As|er|hb|ng',
        'Move Left 1',
        'Move Right 2',
        'Move Right 3',
        'Move Left 2',
        'Done'
      ]
)

function secondSolve(input) {
    input.pop()
    let weapon = input.shift().split('|')

    for (let line of input) {
        let tokens = line.split(' ');
        let command = `${tokens[0]} ${tokens[1]}`;

        if (command === 'Move Left') {
            moveLeft(+tokens[2])
        } else if (command === 'Move Right') {
            moveRight(+tokens[2])
        } else if (command === 'Check Even') {
            checkEven()
        } else if (command === 'Check Odd') {
            checkOdd()
        }
    }

    console.log(`You crafted ${weapon.join('')}!`)

    function moveLeft(index) {
        let tempIndex = index - 1;
        if (index >= 0 && index < weapon.length && tempIndex >= 0) {
            let temp = weapon[tempIndex]
            weapon[tempIndex] = weapon[index]
            weapon[index] = temp
        }
    }

    function moveRight(index) {
        let tempIndex = index + 1;
        if (index >= 0 && index < weapon.length && tempIndex < weapon.length) {
            let temp = weapon[tempIndex]
            weapon[tempIndex] = weapon[index]
            weapon[index] = temp
        }
    }

    function checkEven() {
        let output = []
        for (let i = 0; i < weapon.length; i += 2) {
            output.push(weapon[i])
        }
        console.log(output.join(' '))
    }

    function checkOdd() {
        let output = []
        for (let i = 1; i < weapon.length; i += 2) {
            output.push(weapon[i])
        }
        console.log(output.join(' '))
    }
}

secondSolve(
    [
        'ha|Do|mm|om|er',
        'Move Right 0',
        'Move Left 3',
        'Check Odd',
        'Move Left 2',
        'Move Left 10',
        'Move Left 0',
        'Done'
    ]
)