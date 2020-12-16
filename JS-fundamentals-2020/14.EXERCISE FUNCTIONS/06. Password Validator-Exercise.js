function solve(input) {
    let length = false;
    let lettersAndDigits = false;
    let twoDigits = false;

    isValidLength(input);
    isOnlyLettersAndDigits(input);
    isTwoDigits(input);

    function isValidLength(input) {
        if (input.length >= 6 && input.length <= 10) {
            length = true;
        } else {
            return console.log(`Password must be between 6 and 10 characters`);
        }
    }

    function isOnlyLettersAndDigits(input) {
        for (let i = 0; i < input.length; i++) {
            // 48 - 57 || 65 - 90 || 97-122
            let asciiValue = input[i].charCodeAt();
            if (asciiValue >= 48 && asciiValue <= 57
                || asciiValue >= 65 && asciiValue <= 90
                || asciiValue >= 97 && asciiValue <= 122) {
                lettersAndDigits = true;
            } else {
                return console.log("Password must consist only of letters and digits");
            }
        }
    }

    function isTwoDigits(input) {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            let asciiValue = input[i].charCodeAt();
            if (asciiValue >= 48 && asciiValue <= 57) {
                count++;
            }
        }
        if (count >= 2) {
            twoDigits = true;
        } else {
            return console.log("Password must have at least 2 digits");
        }
    }

    if (length && twoDigits && lettersAndDigits) {
        console.log("Password is valid");
    }
}

solve(
    'logIn588'
    // 'MyPass123'
    // 'Pa$s$s'
)