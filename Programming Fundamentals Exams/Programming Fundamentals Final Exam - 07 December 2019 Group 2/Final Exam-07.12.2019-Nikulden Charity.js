// Spread Operator // разчупва масива
//let arr = [5,4,3]
//let func(...arr) 
// Destructuring // на един ред присвояваме променливи
//let [ a, b, c ] = [5, 4, 3]
// matchAll && exec

// в тази задача имаме операции с текстообработка
//1. може да се ползва .replace() // която може да работи с рег.израз или със стринг
//ако ползваме рег.израз може да заменим всички попадения на текущия символ с новия символ
//ако ползваме стринг трябва да ползваме уайл цикъл
// 2. substring(startIndex, endIndex) - премахване на символи от стартиндекс до ендиндекс
//по условие в задачата премахваме от 0 до startIndex + от endIndex + 1
// 3. make(upper/lower)
// 4. check -> може да се ползват две функции search && includes
// search() -> връща индекса на първия срещнат елемент, ако няма връща -1 
// includes() -> връща булева
// find() е метод само на масив, докато search e зь стринг

function solve(input) {
    let message = input.shift();

    for (let line of input) {
        if (line === 'Finish') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];

        // също може по няколко начина за подаване на командите if-else/switch
        switch (command) {
            case 'Replace': replace(tokens[1], tokens[2]) // тук може да използваме и destructuring
                // т.е. горе казваме let command = tokens.shift(), т.е. в  tokens премахваме първия елемент, който е командата, а останалаите подаваме на функцията, като ги деструктурираме
                // а тук извикваме replace(...tokens) и деструктурираме tokens, който е масив който разчупваме 
                // и в replace остават/се подават само елементите и няма значение колко са на брой
                break;
            case 'Cut' : cut(Number(tokens[1]), Number(tokens[2]))
            break;
            case 'Make' : make(tokens[1])
            break;
            case 'Check' : check(tokens[1])
            break;
            case 'Sum' : sum(Number(tokens[1]), Number(tokens[2]))
            break;
        }
    }

    function replace(currentChar, newChar) {
        //1. replace with while loop -> може да се ползва search or includes
        //2. replace with regular expression
        while (message.search(currentChar) !== -1) {
            message = message.replace(currentChar, newChar);
        }
        // може да се имплементира по много начини, т.е вместо с while,  
        //може с рег.израз  -> message = message.replace(new RegExp(currentChar, 'g'), newChar);
        // или може с -> message = message.split(currentChar).join(newChar); 
        console.log(message);
    }

    function cut(startIndex, endIndex) {
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            message = message.substring(0, startIndex) + message.substring(endIndex + 1);
            console.log(message);
        } else {
            console.log('Invalid indexes!');
        }
    }

    function make(type) {
        if (type === 'Upper') {
            message = message.toUpperCase();
        } else {
            message = message.toLowerCase();
        }
        console.log(message);
    }
   
    function check(string) {              // може да се използват two function -> search/includes
        if (message.includes(string)) {
            console.log(`Message contains ${string}`);
        } else {
            console.log(`Message doesn't contain ${string}`);
        }
    }

    function sum(startIndex, endIndex) {
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            let sum = 0;
            let substring = message.substring(startIndex, endIndex + 1);

            for (let i = 0; i < substring.length; i++) {
                let ascii = substring.charCodeAt(i);
                sum += ascii;
            }

            console.log(sum);
        } else {
            console.log('Invalid indexes!');
        }
    }

    function indexIsValid(index) {
        return index >= 0 && index < message.length;
    }
}

solve(
    [
        'ILikeSharan',
        'Replace a e',
        'Make Upper',
        'Check SHEREN',
        'Sum 1 4',
        'Cut 1 4',
        'Finish'
    ]
)