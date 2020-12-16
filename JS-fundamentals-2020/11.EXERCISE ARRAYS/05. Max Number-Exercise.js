function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let flag= true;
        for (let j = i +1; j < input.length; j++) {
            if (Number(input[i]) > Number(input[j])) {
               flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if (flag) {
             result.push(Number(input[i]))
        }
    }
    console.log(result.join(' '))
}

solve(
    // [1, 4, 3, 2]
    // [14, 24, 3, 19, 15, 17]
   // [41, 41, 34, 20]
     [27, 19, 42, 2, 13, 45, 48]
)