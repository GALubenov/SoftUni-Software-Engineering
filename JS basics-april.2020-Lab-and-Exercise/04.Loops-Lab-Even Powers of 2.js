function solve(input) {
    input = +input;

    for (let i = 0; i <= input; i += 2) {
        console.log(Math.pow(2, i)); //  Печата четните степени на 2 
        // или -> console.log(2 ** i);
    }

}

solve(6);