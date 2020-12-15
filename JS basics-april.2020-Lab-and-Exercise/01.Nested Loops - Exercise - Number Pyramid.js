function solve(input) {
    let num = +input[0];

    let counter = 1;
    let flag = false;
    let printCurrentLine = '';

    for (let row = 1; row <= num; row++) {
        for (let cols = 1; cols <= row; cols++) {
            if (counter > num) {
                flag = true;
                break;
            }
            printCurrentLine += `${counter} `;
            counter++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (flag) {
            break;
        }
    }
}

solve(['10']);