function solve(input) {

    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);
    let countOfStudents = Number(input[3]);

    let studentsPerOur = firstEmployee + secondEmployee + thirdEmployee;

    let hourCount = 0;
    let restCount = 0;
    while (countOfStudents > 0) {
        hourCount++;
        restCount++;

        countOfStudents -= studentsPerOur;
        if (restCount === 3) {
            hourCount++;
            restCount = 0;
        }

    }

    console.log(`Time needed: ${hourCount}h.`)

}

solve(
    // [ '5', '6', '4', '20' ]
    // ['1', '2', '3', '45']
     ['0','0','1','0']
)