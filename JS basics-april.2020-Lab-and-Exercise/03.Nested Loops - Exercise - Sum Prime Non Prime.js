function solve(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;

    let k = 0;
    while (input[k] !== 'stop') {

        let n = +input[k];
        let flag = true;
        
        if (n < 0) {
            k++;
            console.log(`Number is negative.`);
            continue;
        }

        let maxDvider = Math.sqrt(n);
        for (let i = 2; i < maxDvider; i++) {
            if (n % i === 0) {
                flag = false;
                break;
            }
        }
        // или
        //for (let i = 2; i < n; i++) {
       //     if (n % i === 0) {
       //         flag = false;
       //     }
       // }

        if (flag) {
            sumPrime += n;
        } else {
            sumNonPrime += n;
        }
        k++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

solve(
   // [3, 9, 0, 7, 19, 4, 'stop']
   // [30, 83, 33, -1, 20, 'stop']
   [2, 3,4,5,7,9,'stop']
);