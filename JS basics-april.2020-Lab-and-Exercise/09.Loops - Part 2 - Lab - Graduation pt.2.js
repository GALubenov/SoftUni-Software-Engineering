function solve(input) {
    let name = input.shift();

    let count = 1;
    let index = 0;
    let totalGrade = 0;
    let flag = true;
    while (count <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade >= 3 && grade < 4) {
            continue;
        } else if (grade < 3) {
            console.log(`${name} has been excluded at ${count} grade`);
            flag = false;
            break;
        }

        count++;
        totalGrade += grade;

    }

    if (flag) {
        console.log(`${name} graduated. Average grade: ${(totalGrade / 12).toFixed(2)}`);
    }
}

solve(
    [
        'Mimi',
        5,
        6,
        5,
        6,
        5,
        6,
        6,
        2,
        3
    ]

)