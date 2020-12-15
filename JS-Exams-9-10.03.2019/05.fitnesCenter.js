function fitnes(args) {
    let brPosetiteli = Number(args[0]);
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let procentTrenira6ti = 0;
    let procentZakupili = 0;
    let i = 1;
    let comm = args[i];
    while (i <= brPosetiteli) {
        if (comm == "Back") {
            back++;
        } else if (comm == "Chest") {
            chest++;
        } else if (comm == "Legs") {
            legs++;
        } else if (comm == "Abs") {
            abs++;
        } else if (comm == "Protein shake") {
            proteinShake++;
        } else if (comm == "Protein bar") {
            proteinBar++;
        }
        i++;
        comm = args[i];
    }
    procentTrenira6ti = (back + chest + legs + abs) / brPosetiteli * 100;
    procentZakupili = (proteinBar + proteinShake) / brPosetiteli * 100;
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${procentTrenira6ti.toFixed(2)}% - work out`);
    console.log(`${procentZakupili.toFixed(2)}% - protein`);

}
fitnes([10,
    "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"])