function ddd(args) {
    let a = args[2];
    let b = args[1];
    let c = args[0];

    let sum = 0;

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            for (let k = 1; k <= c; k++) {

                sum = i * j * k
                console.log(`${i}${" * "}${j}${" * "}${k}${" = "}${sum}${";"}`)
            }
        }
    }
}
ddd([3, 2, 4])
//второ решение
function solve(input) {

    let num = Number(input[0]);
    let a = num % 10;
    let b = Math.floor(num / 10) % 10;
    let c = Math.floor(num / 100);

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            for (let k = 1; k <= c; k++) {
                console.log(`${i}${" * "}${j}${" * "}${k}${" = "}${i * j * k}${";"}`)
            }
        }
    }
}
solve([324])

