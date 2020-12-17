function solve(input) {

    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let sum = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < days; i++) {
        count1++;
        count2++
        sum += dailyPlunder;

        if (count1 === 3) {
            sum += dailyPlunder * 0.5;
            count1 = 0;
        }
        if (count2 === 5) {
            sum -= sum * 0.3;
            count2 = 0;
        }
    }

    if (sum >= expectedPlunder) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((sum / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}

solve(
     [5, 40, 100]
   // [10, 20, 380]
)