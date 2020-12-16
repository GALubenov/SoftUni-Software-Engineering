function solve(str, char, template) {

    let result = str.replace('_', char);

    if (result === template) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

solve(
    'Str_ng', 'I', 'Strong'
)