function solve(input) {

    let obj = {}

    for (let name of input) {
        let personalNumber = name.length;

        obj[name] = personalNumber;
    }

    for (let key of Object.keys(obj)) {
    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
    }
}

solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
