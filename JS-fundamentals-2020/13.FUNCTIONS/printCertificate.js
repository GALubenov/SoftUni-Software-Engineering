function printSertificate(grade, namesArr) {

    if (pass(grade)) {
        printHeader();
        console.log(getName(namesArr));
        formatGrade(grade);
    } else {
        console.log(`${getName(namesArr)} dos not qualify!`);
    }

    function formatGrade(input) {
        input = Number(input);
        if (input < 3.00) {
            console.log("Fail (2)");
        } else if (input >= 3.00 && input < 3.5) {
            console.log(`Poor (${input.toFixed(2)})`);
        } else if (input >= 3.50 && input < 4.5) {
            console.log(`Good (${input.toFixed(2)})`);
        } else if (input >= 4.50 && input < 5.5) {
            console.log(`Very good (${input.toFixed(2)})`);
        } else if (input >= 5.50) {
            console.log(`Excellent (${input.toFixed(2)})`);
        }
    }

    function getName(namesArr) {
        return namesArr[0] + ' ' + namesArr[1];
    }

    function printHeader() {
        console.log('------ {@} ------');
        console.log('   Certificate');
        console.log('-----------------')
    }

    function pass(grade) {
        return grade >= 3;
    }
}

printSertificate(4.99, ['John', 'Smith']);