function solve(sequence, special) {
    let targetArr = sequence.slice();
    let bomb = Number(special[0]);
    let power = Number(special[1]);

    while (targetArr.includes(bomb)) {
        let index = targetArr.indexOf(bomb)
        let start = index - power;
        if (start < 0) {start = 0};
        let end = power * 2 + 1;
        
        targetArr.splice(start, end);
    }

    let sum = 0;
    for (let el of targetArr) {
        sum += el;
    }
    console.log(sum);
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 5])
// solve([1, 4, 4, 2, 8, 9, 1], [9, 3])
// solve([1, 7, 7, 1, 2, 3], [7, 1])
// solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])