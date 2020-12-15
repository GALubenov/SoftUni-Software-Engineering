function spec(args) {
    let s = Number(args[0]);
    let formatString = '';

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {

                    if (s % i === 0 &&
                        s % j === 0 &&
                        s % k === 0 &&
                        s % l === 0) {

                        formatString += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(formatString);
}
spec([3]);
// или същото решение с while цикъл
function spec(args) {
    let s = Number(args[0]);
    let formatString = '';
   
    let i = 1;
    while (i <= 9) {
        let j = 1;
        while (j <= 9) {
            let k = 1;
            while (k <= 9) {
                let l = 1;
                while (l <= 9) {

                    if (s % i === 0 &&
                        s % j === 0 &&
                        s % k === 0 &&
                        s % l === 0) {

                        formatString += `${i}${j}${k}${l} `;
                    }
                    l++
                }
                k++
            }
            j++
        }
        i++
    }
    console.log(formatString);
}
spec([3]);