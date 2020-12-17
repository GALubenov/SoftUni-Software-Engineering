function solve(input) {
    let numCount = Number(input.shift());
    let patternForValidPass = /(\D{1,})>{1}[0-9]{3}\|[a-z]{3}\|[A-Z]{3}\|[^><]{3}<\1/g;
    let patternForPass = /[0-9]{3}\|[a-z]{3}\|[A-Z]{3}\|[^><]{3}/g;

    for (let line of input) {
        let match = line.match(patternForValidPass)
        if (match) {
            let password = line.match(patternForPass)
            console.log(`Password: ${password[0].split('|').join('')}`);
        } else {
            console.log('Try another password!');
        }
    }
}

solve(
    //['3', '##>00|no|NO|!!!?<###', '##>123|yes|YES|!!!<##', '$$<111|noo|NOPE|<<>$$']
    ['5', 'aa>111|mqu|BAU|mqu<aa', '()>111!aaa!AAA!^&*<()',
        'o>088|abc|AAA|***<o', 'asd>asd|asd|ASD|asd<asd', '*>088|zzzz|ZzZ|123<*', 'o>088|abc|AAA|***<o',]
)