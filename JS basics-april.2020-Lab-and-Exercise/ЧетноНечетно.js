function solve(args) {
    let n = Number(args[0]);
    let chetno = 0;
    let nechetno = 0;
    for (let i = 1; i <= n; i++) {
        let temp = Number(args[i]);
        if (i % 2 == 0) {
            chetno += temp;
        } else {
            nechetno += temp;
        }
    }
    let difference = Math.abs(chetno - nechetno);
    if (difference === 0) {
        console.log(`Yes! Sum = ${chetno}`);
    } else {
        console.log(`No! Diff = ${difference}`);
    }
}
solve([4, 10, 60, 60, 20]);

function oddEven(input) {
    let n = input[0];
    let odd = 0;
    let even = 0;
    for (let i = 1; i <= n; i++) {
        let temp = input[i];
        if (i % 2 == 0) {
            even += temp;
        } else {
            odd += temp;
        }
    }
    if (odd === even) {
        console.log(`Yes! Sum = ${even}`)
    } else {
        console.log(`No! Diff = ${Math.abs(even - odd)}`)
    }
}
oddEven([4, 10, 50, 60, 20])