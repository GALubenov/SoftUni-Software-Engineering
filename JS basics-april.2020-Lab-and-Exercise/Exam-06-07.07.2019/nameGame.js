function game(args) {
    let i = 0;
    let index = args[i];
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let winner = "";
    while (index != "Stop") {
        let name = index;
        let nameLength = name.length;
        let points = 0;
        for (let a = 0; a < nameLength; a++) {
            let number = Number(args[i + 1]);
            let charName = index;
            let charNum = charName.charCodeAt(a);

            if (charNum === number) {
                points += 10;
            } else {
                points += 2;
            }
            i++
        }
        if (points >= maxPoints) {
            maxPoints = points;
            winner = name;
        }
        i++;
        index = args[i];
    }
    console.log(`The winner is ${winner} with ${maxPoints} points!`);
}
game(["Pesho",
    124,
    34,
    111,
    97,
    99,
    "Gosho",
    98,
    124,
    88,
    76,
    18,
    "Stop"
    ])