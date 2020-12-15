function solve(input) {
    let numScore = +input.shift();
    let j = 0;
    
    let averageGrade = 0;
    let count = 0;
    while (input[j] !== 'Finish') {
        let grade = 0;
        let name = input.shift(); 

        for (let i = 0; i < numScore; i++) {
            grade += +input.shift();
            count++;
        }
        averageGrade += grade;
        console.log(`${name} - ${(grade / numScore).toFixed(2)}.`);
    }

    console.log(`Student's final assessment is ${(averageGrade / count).toFixed(2)}.`);
}

solve(
   // [2, 'While-Loop', 6.00, 5.50, 'For-Loop', 5.84, 5.66, 'Finish']
    // [3,'Arrays',4.53,5.23,5.00,'Lists',5.83,6.00,5.42,'Finish']
      [2, 'Objects and Classes', 5.77, 4.23, 'Dictionaries', 4.62, 5.02, 'RegEx', 2.88, 3.42, 'Finish']
);