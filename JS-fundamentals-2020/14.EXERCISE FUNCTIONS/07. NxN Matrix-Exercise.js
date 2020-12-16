function solve(input) {

    let digit = Number(input)

    for (let i = 0; i < digit; i++) {
        let result = '';
        for (let j = 0; j < digit; j++) {
            result += digit + ' ';
        }
        
        console.log(result)
    }
}

solve(    3)