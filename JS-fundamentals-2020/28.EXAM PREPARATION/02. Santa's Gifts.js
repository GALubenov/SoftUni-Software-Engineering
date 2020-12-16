function solve(input) {
    let n = Number(input.shift());
    let arr = input.shift().split(' ').map(Number);
    let currentPosition = 0;
    let actions = {
        Forward: (arr, numSteps) => {
            if (numSteps >= 0 && numSteps < arr.length) {
                if (currentPosition + numSteps < arr.length) {
                    currentPosition += numSteps;
                    arr.splice(currentPosition, 1);
                }
            }
        },
        Back: (arr, numSteps) => {
            if (numSteps >= 0 && numSteps < arr.length) {
                if (currentPosition - numSteps >= 0) {
                    currentPosition -= numSteps;
                    arr.splice(currentPosition, 1);
                }
            }
        },
        Gift: (arr, index, houseNum) => {
            arr.splice(index, 0, houseNum);
            currentPosition = index;
        },
        Swap: (arr, num1, num2) => {
            let index1 = arr.indexOf(num1);
            let index2 = arr.indexOf(num2);
            if (index1 != -1 && index2 != -1) {
                let temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
            }
        }
    }
    
    for (let line of input) {
        let [command, args1, args2] = line.split(' ');
        args1 = Number(args1);
        args2 = Number(args2);
        actions[command](arr, args1, args2);
    }

    console.log(`Position: ${currentPosition}`);
    console.log(arr.join(', '));
}

solve(['1', '255 500 100', 'Forward 3',])


//solve(['5', '255 500 54 78 98 24 30 47 69 58', 'Forward 1', 'Swap 54 47', 'Gift 1 20', 'Back 1', 'Forward 3'])

//solve(['6', '50 40 25 63 78 54 66 77 24 87', 'Forward 4', 'Back 3', 'Forward 3', 'Gift 2 88', 'Swap 50 87', 'Forward 1'])
