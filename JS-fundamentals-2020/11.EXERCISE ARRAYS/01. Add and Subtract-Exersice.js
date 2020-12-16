function solve(input) {

    let modifiedArr = input.map((c, i) => { return c % 2 === 0 ? c += i : c -= i });
    let sumOriginalArr = input.reduce((acc, v) => { return acc + Number(v) }, 0);
    let sumNewArr = modifiedArr.reduce((acc, v) => { return acc + Number(v) }, 0);
    console.log(modifiedArr)
    console.log(sumOriginalArr)
    console.log(sumNewArr)

    /*
        for (let i = 0; i < input.length; i++) {
            sumInput += Number(input[i]);
            if (Number(input[i]) % 2 === 0) {
               arr[i] = Number(input[i]) + i;
               sumArr += arr[i];
            } else {
                arr[i] = Number(input[i]) - i;
                sumArr += arr[i];
            }
        }
    */

}

solve(
    // [5, 15, 23, 56, 35]
    [-5, 11, 3, 0, 2]
)