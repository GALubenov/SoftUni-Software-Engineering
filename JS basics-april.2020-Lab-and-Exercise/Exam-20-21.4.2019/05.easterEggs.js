function eggs(args) {
    let brEggs = Number(args[0]);
    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let max = 0;

    for (let i = 1; i <= brEggs; i++) {
        let comm = args[i]
        if (comm === "red") {
            red++;
        }
        if (comm === "orange") {
            orange++;
        }
        if (comm === "blue") {
            blue++;
        }
        if (comm === "green") {
            green++;

        }
    }
    max = Math.max(red, orange, blue, green);
    console.log(`Red eggs: ${red}`)
    console.log(`Orange eggs: ${orange}`)
    console.log(`Blue eggs: ${blue}`)
    console.log(`Green eggs: ${green}`)
    if (red === max) {
        console.log(`Max eggs: ${max} -> red`);
    }
    if (orange === max) {
        console.log(`Max eggs: ${max} -> orange`);
    }
    if (blue === max) {
        console.log(`Max eggs: ${max} -> blue`);
    }
    if (green === max) {
        console.log(`Max eggs: ${max} -> green`);
    }
}
eggs([4,
    "blue",
    "red",

    "blue",
    "orange",

])