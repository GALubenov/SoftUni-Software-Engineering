function solve(args) {
    let n = Number(args[0]);
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        // taking every number from the array
        let currentNumber = Number(args[i]);
        //compare all the numbers with maxNumber
        if (currentNumber > maxNumber) {
            //if max number is < set current number to max
            maxNumber = currentNumber;
        }
    }
    console.log(maxNumber);
}
solve(['2', 100, 199]);