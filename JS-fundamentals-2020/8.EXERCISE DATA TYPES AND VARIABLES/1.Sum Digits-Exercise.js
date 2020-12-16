function solve(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    console.log(sum)
}
solve(15)
//второ решение - събиране на числата
function sum (number){
    let sumTotal = 0;
    let numberStr = number.toString() // правим числото на стринг с метода toString или със `${number}` 
    for (let i = 0; i < numberStr.length; i++){   // завъртаме по дължината на стринга
        sumTotal += +numberStr[i];                // събираме като индекса на стринга го парсваме към число
    }
    console.log (sumTotal)
}
sum(245678)

function red(input) {
let result = input.toString().split('').reduce((acc, v) => {return acc + Number(v)}, 0);
console.log(result);
}

red(245678)
