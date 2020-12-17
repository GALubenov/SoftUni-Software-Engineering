function solve(input) {
    let initialEnergy = input.shift();
    initialEnergy = +initialEnergy;
    let wonBattles = 0;
    let count = 0;
    for (let line of input) {
        if (line === 'End of battle') {
            console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`)
            break;
        }

        let tokens = +line;

        if (initialEnergy > 0 && initialEnergy >= tokens) {
            initialEnergy -= tokens;
            wonBattles++;
            count++;
            if (count === 3) {
                initialEnergy += wonBattles;
                count = 0;
            }

        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
            break;
        }
    }
}

solve(
     ['100', '10', '10', '10', '1', '2', '3', '70', '10']

    // [ '200', '54', '14', '28', '13', 'End of battle' ]
)