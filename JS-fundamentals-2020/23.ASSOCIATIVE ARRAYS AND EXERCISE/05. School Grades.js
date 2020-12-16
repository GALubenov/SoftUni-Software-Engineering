function solve(input) {
    let students = new Map();

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!students.has(name)) {
            students.set(name, []);
        }

        let exsiting = students.get(name);
        for (let grade of grades) {
            exsiting.push(grade);
        }
    }

    let sorted = Array.from(students);
    sorted.sort(compareStudens);

    for (let [name, grade] of sorted) {
        console.log(`${name}: ${grade.join(', ')}`);
    }
   
    function compareStudens([nameA, gradesA], [nameB, gradesB]) {
        let avrA = 0;
        gradesA.forEach(x => avrA += x);
        avrA /= gradesA.length;
    
        let avrB = 0;
        gradesB.forEach(x => avrB += x);
        avrB /= gradesB.length;
    
        return avrA - avrB;
    }
}

solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)