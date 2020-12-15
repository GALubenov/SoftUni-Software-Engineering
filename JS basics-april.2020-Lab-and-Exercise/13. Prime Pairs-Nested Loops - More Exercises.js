function solve(input) {
    let num1 = +input[0];
    let num2 = +input[1];
    let diffNum1 = +input[2];
    let diffNum2 = +input[3];

    for (let a = num1; a <= num1 + diffNum1; a++) {
        for (let b = num2; b <= num2 + diffNum2; b++) {

            if (test_prime(a) && test_prime(b)) {
                console.log(`${a}${b}`)
            }
        }
    }

    function test_prime(n) {
        if (n === 1) {
            return false;
        }
        else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }
}

function solved(input) {
    let num1 = +input[0];
    let num2 = +input[1];
    let diffNum1 = +input[2];
    let diffNum2 = +input[3];

    for (let a = num1; a <= num1 + diffNum1; a++) {
        for (let b = num2; b <= num2 + diffNum2; b++) {

            for (let x = 2; x < a; x++) {

            if (a % x ===0) {
              // console.log(`${a}${b}`)
            }
 
        }

 
        }
    }

    function test_prime(n) {
        if (n === 1) {
            return false;
        }
        else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }
    console.log(test_prime(5))

}
solved(
    // [10, 20, 5, 5],
    [10, 30, 9, 6],
);

