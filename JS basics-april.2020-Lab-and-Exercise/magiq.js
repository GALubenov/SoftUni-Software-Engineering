function abs(args) {
    let magicNumber = Number(args[0]);
    let formatString = '';
    
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    for (let m = 1; m <= 9; m++) {
                        for (let n = 1; n <= 9; n++) {
                            
                            let sum = i * j * k * l * m * n;
                            
                            if (sum === magicNumber) {
                                formatString += `${i}${j}${k}${l}${m}${n} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(formatString);
}
abs([2]);