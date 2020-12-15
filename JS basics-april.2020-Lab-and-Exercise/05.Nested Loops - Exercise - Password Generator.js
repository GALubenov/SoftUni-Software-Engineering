function solve(input) {
    let n = +input[0];
    let l = +input[1];
   
    let result = '';
    for (let i = 1; i < n; i++) {
      
        for (let j = 1; j < n; j++) {
          
            for (let k = 97; k < l + 97; k++) {
                for (let m = 97; m < l + 97; m++) {
                    for (let w = 1; w <= n; w++) {
                      
                        if (w > i && w > j) {
                            result += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(m)}${w} `
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

solve([
    4, 2
]);