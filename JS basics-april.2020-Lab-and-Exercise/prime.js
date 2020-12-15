function solve(second) {
    let prime = '';
    for (let i = 1; i <= second; i++) {
        if (test_prime(i) === true) {
            prime += `${i} `
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
    console.log(prime);
}

solve(100)

function isPrime(num) {
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    let s = Math.sqrt(num); // store the square to loop faster
    for (let i = 3; i <= s; i++) { // start from 3, stop at the square, increment
        if (num % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
}
console.log(isPrime(100))

function primeNonprime(input) {
    let command = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command != "stop") {
        let num = Number(command);
        if (num < 0) {
            console.log("Number is negative.");
            command = input.shift();
            continue;
        }

        let isPrime = true;

        if (num == 1) {
            isPrime = false;
        } else {
            for (let i = num; i >= 2; i--) {

                if (num % i == 0 && i != num) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }

        command = input.shift();

    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}