function solve(input) {
    let grade = +input.shift();

    let i = 0;
    let count = 0;
    let flag = true;
    let averageScore = 0;
    let numOfProblems = 0;
    let lastProblem = '';

    while (input[i] !== 'Enough') {
        lastProblem = input[i];
        let score = Number(input[i + 1])
        if (score <= 4) {
            count++;
            if (count >= grade) {
                flag = false;
                break;
            }
        }

        averageScore += score;
        numOfProblems++;
        i += 2;
    }

    averageScore = averageScore / numOfProblems;

    if (flag) {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${numOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${count} poor grades.`);
    }
}

solve(
    //  [
    //     3,
    //      'Money',
    //      6,
    //      'Story',
    //      4,
    //      'Spring Time',
    //      5,
    //      'Bus',
    //      6,
    //      'Enough',
    //  ]

    [
        2,
        'Income',
        3,
        'Game Info',
        6,
        'Best Player',
        4
    ]

)