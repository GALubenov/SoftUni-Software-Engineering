function calculateBonus(input) {
    // 1. Input
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());

    // 2. Calculate
    let students = input; 
    let attendences = students.map(Number);
    let maxAttendence = Math.max(...attendences);

    // for (let i = 0; i < studentsCount; i++) {
    //     let currentAttendece = Number(students[i]);

    //     if (currentAttendece > maxAttendence) {
    //         maxAttendence = currentAttendece;
    //     }
    // }

    let maxBonus = 0;
    if (lecturesCount > 0) {
        maxBonus = maxAttendence / lecturesCount * (5 + initialBonus);
    }

    // 3. Print result
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendence} lectures.`);
}

calculateBonus([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  );