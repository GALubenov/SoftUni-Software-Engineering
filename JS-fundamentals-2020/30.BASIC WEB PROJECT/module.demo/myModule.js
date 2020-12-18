function addNumbers(a ,b) {
    return a + b;
}

function compareNumbers(a, b) {
    return b - a;
}

let actions = {
    addNumbers,
    compareNumbers
}

module.exports = actions;
