function solve(input) {
    let firstEl = Number(input.shift());
    let lastEl = Number(input.pop());

    console.log(firstEl + lastEl);
}

solve(
    ['20', '30', '40']
)