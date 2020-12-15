function solve(args) {

    let start = Number(args[0]);
    let end = Number(args[1]);
    let magicNumber = Number(args[2]);
    let counter = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            counter++;
            if (i + j == magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`)
                return;    
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magicNumber}`)
}
solve([88, 888, 1000])