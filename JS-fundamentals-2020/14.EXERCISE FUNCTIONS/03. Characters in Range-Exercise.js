function solve(firstChar, secondChar) {
    let result = '';
    let firstNum = firstChar.charCodeAt()
    let secondNum = secondChar.charCodeAt()

    if (firstNum > secondNum) {
        let temp = firstNum;
        firstNum =  secondNum;
        secondNum = temp;  
    }

    for(let i = firstNum + 1; i < secondNum; i++) {
        result += `${String.fromCharCode(i)} `;
    }

    console.log(result)
}

solve(
    'C',
    '#'
)