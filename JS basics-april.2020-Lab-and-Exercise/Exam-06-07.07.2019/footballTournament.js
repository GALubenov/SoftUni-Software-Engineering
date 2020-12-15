function football(args) {
    let name = args[0];
    let brSre6ti = Number(args[1]);
    let win = 0;
    let raven = 0;
    let lost = 0;
    let counter = 0;
    if (brSre6ti === 0) {
        console.log(`${name} hasn't played any games during this season.`);
        return;
    }
    for (let i = 1; i <= brSre6ti; i++) {
        let comm = args[i + 1];
        if (comm == "W") {
            win++;
        } else if (comm == "D") {
            raven++;
        } else if (comm == "L") {
            lost++;
        }
        counter++;
    }
    let winPoints = (win * 3) + (raven * 1);
    console.log(`${name} has won ${winPoints} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${win}`);
    console.log(`## D: ${raven}`);
    console.log(`## L: ${lost}`);
    console.log(`Win rate: ${((win / counter) * 100).toFixed(2)}%`);

}
football(["Barcelona",
    7,
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"
   
])