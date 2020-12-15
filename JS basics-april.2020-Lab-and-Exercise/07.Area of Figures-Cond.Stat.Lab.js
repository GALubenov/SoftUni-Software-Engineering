function solve(figure, length1, length2) {

    if (figure === 'square') {
        let side = Number(length1) * Number(length1);
        console.log(side.toFixed(3));

    } else if (figure === 'rectangle') {
        let side = Number(length1) * Number(length2)
        console.log(side.toFixed(3));

    } else if (figure === 'circle') {
        let area = Math.PI * Number(length1) * Number(length1);
        console.log(area.toFixed(3));

    } else if (figure === 'triangle') {
        let side = Number(length1) * Number(length2) / 2;
        console.log(side.toFixed(3));
    }
}

solve(
    'triangle',
    '4.5',
    '20'
)