function solve(number, text1, text2) {
    number = +number;

    if (text1 === 'm') {
        number = number * 100; // convert m to cm
    } else if (text1 === 'mm') {
        number = number / 10;  // convert mm to cm
    }

    if (text2 === 'm') {
        number = number / 100; // convert cm to m
    } else if (text2 === 'mm') {
        number = number * 10; // convert cm to mm
    }

    console.log(number.toFixed(3))
}

solve('1000', 'mm', 'm')