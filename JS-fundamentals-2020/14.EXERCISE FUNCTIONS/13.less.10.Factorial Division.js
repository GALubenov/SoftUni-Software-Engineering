function solve(firstNum, secondNum) {

    let firstFactorial = getFactorial(firstNum);
    let secondFactorial = getFactorial(secondNum);

    console.log((firstFactorial / secondFactorial).toFixed(2));

    function getFactorial(num) {

        //Stoping point!
        if (num === 1) {
            return 1;
        }

        return num * getFactorial(num - 1); // извършва се рекурсия, безкрайна ф-я, 
    }                                       //която пресъсваме със стопинг пойнт
}

solve(5, 2);

// второ решение с фор цикли
function factorial(firstFactorial, secondFactorial) {

    for (let i = firstFactorial; i > 1; i--) {
        let result = firstFactorial * (i - 1);
        firstFactorial = result;
    }
    
    for (let i = secondFactorial; i > 1; i--) {
        let result = secondFactorial * (i - 1);
        secondFactorial = result;
    }

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

factorial(5, 2);