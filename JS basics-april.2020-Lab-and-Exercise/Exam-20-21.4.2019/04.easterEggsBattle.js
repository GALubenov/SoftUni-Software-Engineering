function battle(args) {
    let brEggsFirstPlayer = Number(args[0]);
    let brEggsSecondPlayer = Number(args[1]);
    let argsLength = args.length;

    for (let i = 2; i <= argsLength; i++) {
        let comm = args[i];
       
        if (comm === "one") {
            brEggsSecondPlayer--
        }
        if (comm === "two") {
            brEggsFirstPlayer--
        }
        if (comm === "End of battle") {
            console.log(`Player one has ${brEggsFirstPlayer} eggs left.`)
            console.log(`Player two has ${brEggsSecondPlayer} eggs left.`)
            break;
        }
    }
    if (brEggsFirstPlayer < 1) {
        console.log(`Player one is out of eggs. Player two has ${brEggsSecondPlayer} eggs left.`)
    }
    if (brEggsSecondPlayer < 1) {
        console.log(`Player two is out of eggs. Player one has ${brEggsFirstPlayer} eggs left.`)
    }
}
battle([6, 3, "one", "two", "two", "one", "one"])