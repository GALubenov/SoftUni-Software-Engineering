function solve(input) {
    let first = +input[0];
    let second = +input[1];
    let thrid = +input[2];

    for (let i = 2; i <= first; i += 2) {

        for (let j = 1; j <= second; j++) {
            let prime = '';

            if (j === 2 || j === 3 || j === 5 || j === 7) {
                prime = j;
            } else { 
               continue;
            }

            for (let k = 2; k <= thrid; k += 2) {
                console.log(`${i} ${prime} ${k}`)
            }
        }
    }
}

solve([3, 2, 5]);

function isPrime(num) {
    let prime = '';
    for (let n = 2; n <= num; n++) {
        let isPrime = true;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            prime += `${n} `
        }
    }
    console.log(prime)
}

// isPrime(100)