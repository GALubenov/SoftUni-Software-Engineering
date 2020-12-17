function solve(input) {
    let targets = input.shift().split(' ').map(Number);

    for (let line of input) {
        let [command, index, type] = line.split(' ');
        index = +index;
        type = +type;
        if (command === 'End') {
            break;
        } else if (command === 'Shoot') {
            shoot(index, type);
        } else if (command === 'Add') {
            add(index, type);
        } else if (command === 'Strike') {
            strike(index, type);
        }
    }

    function strike(index, radius) {
        if (isValidIndex(index)) {
            let leftIndex = index - radius;
            let rightIndex = index + radius;

            if (leftIndex >= 0 && rightIndex < targets.length) {
                targets.splice(leftIndex, ((radius*2)+1));
            } else {
                console.log(`Strike missed!`);
            }
        }
    }

    function add(index, value) {
        if (isValidIndex(index)) {
            targets.splice(index, 0, value);
        } else {
            console.log(`Invalid placement!`);
        }
    }

    function shoot(index, power) {
        if (isValidIndex(index)) {
            targets[index] -= power;
            if (targets[index] <= 0) {
                targets.splice(index, 1);
            }
        }
    }

    function isValidIndex(index) {
        return index >= 0 && index < targets.length;
    }

    console.log(targets.join('|'));
}

solve
    (['52 74 23 44 96 110',
        // 'Shoot 6 1',
        // 'Shoot 1 80',
        'Strike 2 2',
       // 'Add 22 3',
       'End'])

    //(['47 55 85 78 99 20',
   //     'Shoot 1 55',
   //     'Shoot 8 15',
   //     'Strike 2 2',
   //     'Add 0 22',
   //     'Add 2 40',
   //     'Add 2 50',
   //     'End'])