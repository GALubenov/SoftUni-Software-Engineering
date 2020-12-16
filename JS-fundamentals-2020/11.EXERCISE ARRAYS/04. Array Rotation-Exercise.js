function solve(arr, num) {
    for (let j = 0; j < num; j++) {
     /*   let temp = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = temp;
        */
        let temp = arr.shift();
        arr.push(temp);
    }
    console.log(arr.join(' '));
}

solve(
    [51, 47, 32, 61, 21], 2
    // [32, 21, 61, 1], 4
   //  [2, 4, 15, 31], 5
)