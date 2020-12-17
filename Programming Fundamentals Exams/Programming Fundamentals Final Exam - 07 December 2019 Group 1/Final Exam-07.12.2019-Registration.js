function solve(input) {
    input.shift();

    let pattern = /[U][$][A-Z][a-z]{2,}[U][$][P][@][$][a-zA-Z]{5,}\d+[P][@][$]/;
    let count = 0;

    for (let line of input) {
        if (line.match(pattern)) {
            let username = line.split('U$')
            let password = line.split('P@$')

            console.log("Registration was successful")
            console.log(`Username: ${username[1]}, Password: ${password[1]}`);
            count++;
        } else {
             console.log("Invalid username or password");
        }
    }
    if (count > 0) {
        console.log(`Successful registrations: ${count}`);
    }
}

solve(
    ['3',
        'U$MichaelU$P@$asdqwe123P@$',
        'U$NameU$P@$PasswordP@$',
        'U$UserU$P@$ad2P@$']

    // [ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]

    //  ['3',
    // 'U$myU$-->P@$asdqwe123P@$',
    // 'Sara 1232412',
    // 'U$NameU$P@$Pass234P@$']

)