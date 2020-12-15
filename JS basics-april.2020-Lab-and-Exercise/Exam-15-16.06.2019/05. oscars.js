function oscars(args) {
    let name = args[0];
    let points = Number(args[1]);
    let brOcenqva6ti = Number(args[2]);

    let nameActor = "";
    let pointsNaOcenqva6tiq = 0;
    let nameLength = 0;

    let i = 3;
    let comm = args[i];
    for (let a = 1; a <= brOcenqva6ti; a++) {
        nameActor = args[i];
        nameLength = nameActor.length;
        pointsNaOcenqva6tiq = Number(args[i + 1]);
        points += (nameLength * pointsNaOcenqva6tiq) / 2;
        if (points > 1250.5){
            break;
        }
        i += 2;
        comm = args[i];
    }
    if (points > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov", 205, 4,
    "Johnny Depp", 45,
    "Will Smith", 29,
    "Jet Lee", 10,
    "Matthew Mcconaughey", 39
])