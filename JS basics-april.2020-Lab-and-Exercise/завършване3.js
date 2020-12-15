function zavyr6vane(args) {

    let counter = 0;

    while (args[counter] != "END") {
        let name = args[counter];
        counter++;
        let average = 0;
        let cheker = false;
        for (let i = 1; i <= 12; i++) {
            let currentGreade = Number(args[counter]);

            if (currentGreade >= 4) {
                average += currentGreade;
            } else {
                if (cheker == true) {
                    console.log(`${name} has been excluded at ${i} grade`);
                    break;
                }
                cheker = true;
            }
            counter++;
        }
        let averageGrade = average / 12
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
zavyr6vane(["Gosho", 5, 5, 6, 5.4, 5.6, 6, 5.7, 5, 6, 6, 5.9, 5, 
"Ani", 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, "END"])