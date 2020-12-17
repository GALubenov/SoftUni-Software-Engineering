function solve(input) {
    let initialLoot = input.shift().split('|');
    let commandLine = input.shift();


    while (commandLine !== 'Yohoho!') {
        let [command, firstArg] = commandLine.split(' ');

        switch (command) {
            case 'Loot': {
                let arr = commandLine.split(' ');
                arr.shift();
                for (let item of arr) {
                    if (!initialLoot.includes(item)) {
                        initialLoot.unshift(item);
                    }
                }
                break;
            }

            case 'Drop': {
                let index = Number(firstArg);
                if (index >= 0 && index < initialLoot.length) {
                    let removedLoot = initialLoot.splice(index, 1);
                    initialLoot.push(...removedLoot);
                }
                break;
            }

            case 'Steal': {
                let count = Number(firstArg);
                let stealLoot = [];
                for (let i = 0; i < count; i++) {
                    if (initialLoot.length === 0) {
                        break;
                    }
                    stealLoot.unshift(initialLoot.pop());
                }
                
                console.log(stealLoot.join(', '));
                break;
            }
        }

        commandLine = input.shift();
    }

    let sum = 0;
    for (let item of initialLoot) {
        sum += item.length;
    }

    let averageGain = sum / initialLoot.length;
    if (initialLoot.length > 0) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

solve(
    // ['Gold|Silver|Bronze|Medallion|Cup', 'Loot Wood Gold Coins', 'Loot Silver Pistol', 'Drop 3', 'Steal 3', 'Yohoho!']
    ['Diamonds|Silver|Shotgun|Gold', 'Loot Silver Medals Coal', 'Drop -1', 'Drop 1', 'Steal 8', 'Yohoho!']
)