function solve(input) {
    let string = input.toString();
    console.log(`Odd sum = ${isOddSum(string)}, Even sum = ${isEvenSum(string)}`);

    function isOddSum(str) {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            if (Number(str[i]) % 2 !== 0) {
                result += Number(str[i]);
            }
        }

        return result;
    }

    function isEvenSum(str) {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            if (Number(str[i]) % 2 === 0) {
                result += Number(str[i]);
            }
        }

        return result;
    }


    let arr = input.toString().split('').map(Number);
    let oddSum = 0;
    let evenSum = 0;
    for (let v of arr) {
        if (v % 2 === 0) {
            evenSum += v;
        } else {
            oddSum += v;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(
    1000435
)