function solve(input) {
    let arr = input.split(' ').map(x => Number(x))
    let averageNum = averageResult(arr)

    let greaterThanAverage = arr.filter(x => x > averageNum);

    let sorted = greaterThanAverage.sort((a, b) => b - a).slice(0, 5);

    if (sorted.length > 0) {
        console.log(sorted.join(' '))
    } else {
        console.log('No')
    }

    function averageResult(arr) {
        let result = 0
        arr.forEach(element => {
            result += element
        });
        return result / arr.length;
    }
}

solve(
    // '10 20 30 40 50'
    // '5 2 3 4 -10 30 40 50 20 50 60 60 51'
    // '1'
     '-1 -2 -3 -4 -5 -6'
)