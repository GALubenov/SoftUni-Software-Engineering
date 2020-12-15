function competition(args) {
    let brCake = Number(args[0]);
    let index = 1;
    let comm = args[index];
    let nameOfbaker = "";
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let realWinner = "";
    for (let i = 1; i <= brCake; i++) {
        nameOfbaker = args[index];
        let ocenka = 0;
        while (comm != "Stop") {
            index++;
            comm = args[index];
            if (comm == "Stop") {
                break;
            }
            ocenka += Number(comm);
        }
        console.log(`${nameOfbaker} has ${Number(ocenka)} points.`);
        if (ocenka > maxPoints) {
            console.log(`${nameOfbaker} is the new number 1!`);
            maxPoints = ocenka;
            realWinner = nameOfbaker;
        }
        index++;
        comm = args[index];
    }
    if (maxPoints) {
        console.log(`${realWinner} won competition with ${maxPoints} points!`)
    }
}
competition([3, "Chef Manchev", 10, 10, 10, 10, "Stop", "Natalie", 8, 2, 9, "Stop", "George", 9, 2, 4, 2, "Stop"])
