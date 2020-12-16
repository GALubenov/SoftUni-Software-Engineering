function solve(symbol) {
    let isUpperCase = symbol.toUpperCase() === symbol;
    console.log(isUpperCase ? `upper-case` : `lower-case`);
}

solve('l')

function solve(symbol) {
    let isUpperCase = symbol.toUpperCase();
    if (isUpperCase === symbol) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }
}

solve('l')
function solve(symbol) {
    let code = symbol.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        console.log(`lower-case`);
    }
    if (code >= 65 && code <= 90) {
        console.log(`upper-case`);
    }
} 

solve('l')