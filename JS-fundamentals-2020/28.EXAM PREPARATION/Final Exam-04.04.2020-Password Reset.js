
//50 точки в judge
function solve(input) {
    let string = input.shift();
    let password;

    let actions = {
        TakeOdd: () => {
            let arr = string.split('');
            let temp = [];
            for (let i = 1; i < arr.length; i += 2) {
                temp.push(arr[i]);
            }
            password = temp.join('');
            console.log(password);
        },
        Cut: (index, length) => {
            index = Number(index);
            length = Number(length);

            let firstPart = password.slice(0, index);
            let secondPart = password.slice(index + length);
            password = firstPart + secondPart;
            console.log(password);
        },
        Substitute: (substring, substitute) => {
            let flag = false;
            while (password.includes(substring)) {
                password = password.replace(substring, substitute);
                flag = true;
            }

            if (flag) {
            console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }

    let line = input.shift();
    while (line != 'Done') {
        let [command, args1, args2] = line.split(' ');
        actions[command](args1, args2);
        line = input.shift();
    }

   console.log(`Your password is: ${password}`);
}

solve(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ', 'TakeOdd', 'Cut 15 3', 'Substitute :: -', 'Substitute | ^', 'Done'])
solve(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy', 'TakeOdd', 'Cut 18 2', 'Substitute ! ***', 'Substitute ? .!.', 'Done'])