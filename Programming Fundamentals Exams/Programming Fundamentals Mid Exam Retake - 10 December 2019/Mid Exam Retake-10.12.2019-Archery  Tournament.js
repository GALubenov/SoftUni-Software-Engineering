function solve(input) {

    let targets = input.shift().split('|').map(Number);
    let points = 0;

    for (let line of input) {
        let [command, startIndex, length] = line.split('@');

        if (command === 'Shoot Left') {
            shootLeft(startIndex, length);
        } else if (command === 'Shoot Right') {
            shootRight(startIndex, length);
        } else if (command === 'Reverse') {
            reverse();
        } else if (command === 'Game over') {
            console.log(targets.join(' - '));
            console.log(`Iskren finished the archery tournament with ${points} points!`);
        }
    }

    function shootLeft(startIndex, rotation) {
        startIndex = +startIndex;
        rotation = +rotation;

        if (isValidIndex(startIndex)) {
            let indexOfShotsEl = startIndex

            for (let i = rotation; i > 0; i--) {
                if (indexOfShotsEl < 0) {
                    indexOfShotsEl = targets.length - 1;
                }
                indexOfShotsEl--;
            }

            if (targets[indexOfShotsEl] >= 5) {
                targets[indexOfShotsEl] -= 5;
                points += 5;
            } else {
                points += targets[indexOfShotsEl]
                targets[indexOfShotsEl] = 0
            }
        }
    }

    function shootRight(startIndex, rotation) {
        startIndex = +startIndex;
        rotation = +rotation;

        if (isValidIndex(startIndex)) {
            let indexOfShotsEl = startIndex
            for (let i = 0; i < rotation; i++) {
                if (indexOfShotsEl > targets.length - 1) {
                    indexOfShotsEl = 0
                }
                indexOfShotsEl++;
            }

            if (targets[indexOfShotsEl] >= 5) {
                targets[indexOfShotsEl] -= 5;
                points += 5;
            } else {
                points += targets[indexOfShotsEl]
                targets[indexOfShotsEl] = 0
            }
        }
    }

    function reverse() {
        targets.reverse()
    }

    function isValidIndex(startIndex) {
        return startIndex >= 0 && startIndex < targets.length
    }
}

solve(
    [
        '20|30|40|50|60',
        'Shoot Left@0@12',
        'Shoot Right@4@15',
        'Shoot Left@6@5',
        'Reverse',
        'Game over',
        ''
    ]
)