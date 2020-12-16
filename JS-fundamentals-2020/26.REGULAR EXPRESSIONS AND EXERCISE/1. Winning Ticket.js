function solve(input) { // 80 points in judge
    let arr = input[0].split(/[,\s]+/);

    for (let line of arr) {
        if (line.length === 20) {
            let index = line.length / 2
            let firstPart = line.slice(0, index);
            let secondPart = line.slice(index);
            winer(firstPart, secondPart);
        } else {
            console.log('invalid ticket');
        }
    }

    function winer(first, second) {
        let pattern = /(@{6,})|(#{6,})|(\${6,})|(\^{6,})/g;
        let firstMatch = first.match(pattern);
        let secondMatch = second.match(pattern);
        let flag = true;

        if (firstMatch != null && secondMatch != null) {
            if (firstMatch[0] === secondMatch[0]) {
                if (firstMatch[0].length === 10) {
                    console.log(`ticket "${first + second}" - ${10}${firstMatch[0][0]} Jackpot!`);
                } else if (firstMatch[0].length >= 6 && firstMatch[0].length <= 9) {
                    console.log(`ticket "${first + second}" - ${firstMatch[0].length}${firstMatch[0][0]}`);
                }
                flag = false;
            }
        }

        if (flag) {
            console.log(`ticket "${first + second}" - no match`);
        }
    }
}

solve(['Cash$$$$$$Ca@@@@@@sh']);
solve(['$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey']);
solve(['validticketnomatch:(']);