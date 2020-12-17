function solve(input) {
    let email = input.shift();


    const commandParser = {
        make,
        getdomain,
        getusername,
        replace,
        encrypt
    }

    for (let line of input) {
        let tokens = line.split(' ');
        let command = tokens.shift().toLowerCase();
        if (command === 'complete') {
            break;
        }

        commandParser[command](...tokens);
    }

    function make(type) {
        if (type === 'Upper') {
            email = email.toUpperCase();
            console.log(email);
        } else if (type === 'Lower') {
            email = email.toLowerCase();
            console.log(email);
        }
    }

    function getdomain(count) {
        count = +count;
        let index = email.indexOf('.')
        let domain = email.slice(index + 1);
        console.log(domain);
    }

    function getusername() {
        let index = email.indexOf('@');
        if (index !== -1) {
            let subs = email.substring(0, index);
            console.log(subs);

        } else {
            console.log(`The email ${email} doesn't contain the @ symbol.`);
        }
    }

    function replace(char) {
        // email = email.split(char).join('-')
        while (email.search(char) !== -1) {
            email = email.replace(char, '-')
        }
        console.log(email)
    }

    function encrypt() {
        let arr = email
            .split('')
            .map(s => s.charCodeAt(0))
           .join(' ')

        console.log(`${arr}`);
    }
}

solve(
    ['Mike123@somemail.com',
        'Make Upper',
        'GetDomain 3',
        'GetUsername',
        'Encrypt',
        'Complete']

    // ['AnotherMail.com',
    //     'Make Lower',
    //     'GetUsername',
    //      'Replace a',
    //     'Complete',
    //     '']
    //       
    //       [                'Another@Mail.com',
    //          'Make Lower',
    //           'GetUsername',
    //          'GetDomain 3',
    //          'Encrypt',
    //          'Complete' ]
)