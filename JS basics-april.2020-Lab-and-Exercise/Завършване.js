function zavyrschvane(args) {
    let name = args[0];
    let currentClass = 1;
    let sum = 0;
    let i = 1;
    while (currentClass <= 12) {
        let grade = Number(args[i]);
        if (grade >= 4) {
            sum = sum + grade;
            currentClass++;
        } else if (grade < 4) {
            console.log(` ${name} faild`)
        }
        i++;
              
    }
    let avg = sum / 12;
    console.log(`${name} graduated. 
    Average grade: ${ avg.toFixed(2)} `)

}
zavyrschvane(["Pesho", 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5]);