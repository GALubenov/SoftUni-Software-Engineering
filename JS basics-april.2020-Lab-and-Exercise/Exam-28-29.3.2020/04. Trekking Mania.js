function solve(input) {
    let numGroups = +input.shift();
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < numGroups; i++) {
        let people = +input[i];
        if (people <= 5) {
            musala += people;
        } else if (people > 5 && people <= 12) {
            monblan += people;
        } else if (people > 12 && people <= 25) {
            kilimanjaro += people;
        } else if (people > 25 && people <= 40) {
            k2 += people;
        } else if (people > 40) {
            everest += people;
        }
    }

    let total = musala + monblan + kilimanjaro + k2 + everest;
    console.log(`${((musala / total) * 100).toFixed(2)}%`);
    console.log(`${((monblan / total) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / total) * 100).toFixed(2)}%`);
    console.log(`${((k2 / total) * 100).toFixed(2)}%`);
    console.log(`${((everest / total) * 100).toFixed(2)}%`);
}

solve(
    [
        10,
        10,
        5,
        1,
        100,
        12,
        26,
        17,
        37,
        40,
        78

    ]
)