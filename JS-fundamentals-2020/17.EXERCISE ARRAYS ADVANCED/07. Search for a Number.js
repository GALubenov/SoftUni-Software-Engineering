function solve(firstArr, secondArr) {
    let takesFirstEl = Number(secondArr[0]);
    let deleteEl = Number(secondArr[1]);
    let searchEl = Number(secondArr[2]);

    let arr = firstArr.slice(0, takesFirstEl);
    arr.splice(0, deleteEl);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchEl) {
            count++;
        }
    }
    console.log(`Number ${searchEl} occurs ${count} times.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3])