function solve(input) {

    const [biscuits, worker, otherFactory] = input.map(Number);

    let totalBiscuits = 0;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            totalBiscuits += Math.floor((biscuits * worker) * 0.75);
        } else {
            totalBiscuits += biscuits * worker
        }
    }

    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`)
    let percent = Math.abs((totalBiscuits - otherFactory) / otherFactory) * 100;
    if (totalBiscuits > otherFactory) {
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`)
    }
}

solve(['78',
    '8',
    '16000']);