
//50 точки в judge
function solve(input) {
    let message = input.shift().trim();
    let password = '';

    for (let line of input) {
        let [command, index, length] = line.split(' ');

        if (command === 'TakeOdd') {
            takeOdd();
        } else if (command === 'Cut') {
            cut(index, length);
        } else if (command === 'Substitute') {
            substitute(index, length);
        } else if (command === 'Done') {
            console.log(`Your password is: ${password}`)
            break;
        }
    }

    function takeOdd() {
        for (let i = 0; i < message.length; i++) {
            if (i % 2 !== 0) {
                password += message[i]
            }
        }
        console.log(password)
    }

    function cut(index, length) {
        index = Number(index);
        length = Number(length);
        let end = index + length;

       // let subs = password.substring(index, end)
       // let reg = new RegExp(subs)
        //password = password.replace(reg, '')
        
        password = password.substring(0, index) + password.substring(end, password.length);
        console.log(password)
    }

    function substitute(substring, substitute) {
        if (password.includes(substring)) {
            while (password.search(substring) !== - 1) {
                password = password.replace(substring, substitute);
            }
            console.log(`${password}`);

        } else {
            console.log('Nothing to replace!');
        }
    }
}

solve(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
    ]
)