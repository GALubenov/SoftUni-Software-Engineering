function solve(input) {
    let result = input.filter((v, i) => {
        return input.indexOf(v) === i
    });

    console.log(result.join(' '));

    //second solve
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (!arr.includes(input[i])) {
            arr.push(input[i]);
        }
    }

    console.log(arr.join(' '))
}

//solve([1, 2, 3, 4])
//solve([7, 8, 9, 7, 2, 3, 4, 1, 2])
solve([20, 8, 12, 13, 4, 4, 4, 8, 5, 8])