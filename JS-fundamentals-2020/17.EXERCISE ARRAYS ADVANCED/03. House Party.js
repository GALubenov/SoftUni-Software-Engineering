function solve(input) {

    let arr = [];

    for (let line of input) {
        let [name, firstArg, secondArg] = line.split(' ');

        if (secondArg === 'not') {
            if (arr.includes(name)) {
                let index = arr.indexOf(name);
                arr.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        } else {
            if (!arr.includes(name)) {
                arr.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    } 

    console.log(arr.join('\n'));
}

solve(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])

solve(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])