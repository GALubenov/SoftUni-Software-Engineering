function pc(args) {
    let brIgri = Number(args[0]);
    let name = 0;
    let counter = 0;
    let hearthstone = 0;
    let fornite = 0;
    let ovewatch = 0;
    let others = 0

    for (let i = 1; i <= brIgri; i++) {
        let comm = args[i];
        if (comm == "Hearthstone") {
            hearthstone++;
        } else if (comm == "Fornite") {
            fornite++;
        } else if (comm == "Overwatch") {
            ovewatch++;
        } else {
            others++;
        }
        counter++;
    }
    console.log(`Hearthstone - ${((hearthstone / counter)*100).toFixed(2)}%`);
	console.log(`Fornite - ${((fornite / counter)*100).toFixed(2)}%`);
	console.log(`Overwatch - ${((ovewatch / counter)*100).toFixed(2)}%`);
	console.log(`Others - ${((others / counter)*100).toFixed(2)}%`);

}
pc([4,
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"
])