function solve(input) {

    let flag = true;

    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i + 1; j < input.length; j++) {
            rightSum += Number(input[j])
        }

        for (let k = i - 1; k >= 0; k--) {
            leftSum += Number(input[k]);
        }

        if (leftSum === rightSum) {
            console.log(i);
            flag = false;
            break;
        } 
    }

    if (flag) {
        console.log('no');
    }
}

solve(
     [1, 2, 3, 3]
    //  [1, 2]
    // [1]
    // [1, 2, 3]
    // [10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]
)