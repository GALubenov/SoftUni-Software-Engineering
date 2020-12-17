function solve(input) {

    let username = input.shift();

    let line = input.shift();
    while (line !== 'Sign up') {
        let [command, fisrtArg, secondArg] = line.split(' ');
        switch (command) {
            case 'Case': {
                let type = fisrtArg;
                if (type === 'upper') {
                    username = username.toUpperCase();
                } else {
                    username = username.toLowerCase();
                }
                console.log(username);
                break;
            }

            case 'Reverse': {
                let startIndex = Number(fisrtArg);
                let endIndex = Number(secondArg);

                if (startIndex >= 0 && endIndex < username.length) {
                    let reversedString = username
                        .substring(startIndex, endIndex + 1)
                        .split('')
                        .reverse()
                        .join('');

                    console.log(reversedString)
                }
                break;
            }

            case 'Cut': {
                let substring = fisrtArg;
                let startIndex = username.indexOf(substring);

                if (username.includes(substring)) {
                    let firstPart = username.substring(0, startIndex);
                    let secondPart = username.substring((startIndex + substring.length));
                    username = firstPart + secondPart;
                    console.log(username);
                } else {
                    console.log(`The word ${username} doesn't contain ${substring}.`);
                }
                break;
            }

            case 'Replace': {
                let char = fisrtArg;
                while (username.includes(char)) {
                    username = username.replace(char, '*');
                }
                console.log(username);
                break;
            }

            case 'Check': {
                let char = fisrtArg;

                if (username.includes(char)) {
                    console.log("Valid");
                } else {
                    console.log(`Your username must contain ${char}.`);
                    break;
                }
                break;
            }
        }

        line = input.shift();
    }

}

solve(
     ['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up']
  //  ['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up']
)