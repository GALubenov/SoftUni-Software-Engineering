function solve(input) {
    let arr = input.split('');
    let result = [];
    let startIndex = 0;

    //65-90 // 97-122
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i].charCodeAt();

        if (char >= 65 && char <= 90) {
            let index = i;

            if (index !== startIndex) {
                let word = arr.slice(startIndex, index).join('');
                result.push(word);
            }
            startIndex = index;
        }
    }

    result.push(arr.slice(startIndex).join(''));
    console.log(result.join(', '));
}
solve('HaHa')
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')