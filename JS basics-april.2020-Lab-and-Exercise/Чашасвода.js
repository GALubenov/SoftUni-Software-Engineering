function solve(input) {
    let ml = Number(input[0]);
    let i = 1;
    let button = input[i];
    let counter = 0;
    while (ml > 0) {
        switch (button) {
            case "Easy": ml -= 50;
                break;
            case "Medium": ml -= 100;
                break;
            case "Hard": ml -= 200;
                break;
            default: break;
        }
        i++;
        button = input[i];
        counter++;
    }
    if (ml == 0) {
        console.log(`The dispenser has been tapped ${counter} times.`)
    } else {
        console.log(`${Math.abs(ml)} has been spilled.`)
    }
}
solve([500, "Hard", "Medium", "Easy", "Easy", "Medium"]);