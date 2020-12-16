function palindromeInteger(input) {

    for (let line of input) {
        console.log(isPalindrome(line.toString()));
    }

    function isPalindrome(string) {
        let arr = [];
        for (let i = 0; i < string.length; i++) {
            arr.push(string[i])
        }

        let reversedString = arr.reverse().join('');

        return string === reversedString;
    }
}

palindromeInteger(
    [123, 323, 421, 121]
)