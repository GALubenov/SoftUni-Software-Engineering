function solve(input) {
    let arr = input.shift().split(' ');
    let command = input.shift();
    let counter = 0;
    let flag = true;

    while (command !== 'end') {
        let [firstIndex, secondIndex] = command.split(' ');
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        let firstChar = arr[firstIndex];
        let secondChar = arr[secondIndex];
        counter++;

        if (firstChar === secondChar) {
            arr.splice(firstIndex, 1);
            let index = arr.indexOf(secondChar);
            arr.splice(index, 1);
            console.log(`Congrats! You have found matching elements - ${firstChar}!`)

        } else if (firstIndex - secondIndex === 0 || firstIndex < 0 || firstIndex > arr.length || secondIndex < 0 || secondIndex > arr.length) {
            console.log("Invalid input! Adding additional elements to the board");
            arr.splice(arr.length / 2, 0, (`-${counter}a`));
            arr.splice(arr.length / 2, 0, (`-${counter}a`));

        } else if (firstChar !== secondChar) {
            console.log("Try again!")
        }

        if (arr.length === 0) {
            console.log(`You have won in ${counter} turns!`);
            flag = false;
            break;
        }

        command = input.shift();
    }

    if (flag) {
        console.log('Sorry you lose :(');
        console.log(arr.join(' '));
    }
}

solve(
    [
        "1 1 2 2 3 3 4 4 5 5",
        "1 0",
        "-1 0",
        "1 0",
        "1 0",
        "1 0",
        "end"
    ]
    // ["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]
    // ["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]

)