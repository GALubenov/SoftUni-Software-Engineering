function solve(input) {
    let first = input[0].charCodeAt(0);
    let second = input[1].charCodeAt(0);
    let third = input[2].charCodeAt(0);

    let counter = 0;
    let string = '';

    for (let i = first; i <= second; i++) {
        for (let j = first; j <= second; j++) {
            for (let k = first; k <= second; k++) {
                if (i !== third && j !== third && k !== third) {
                    string += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                    counter++;
                }
            }
        }
    }

    console.log(`${string}${counter}`);
}

solve(['f', 'k', 'h']);

