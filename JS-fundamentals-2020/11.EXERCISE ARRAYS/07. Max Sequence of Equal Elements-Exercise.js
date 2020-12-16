function solve(input) {
    let longest = [];
    for (let i = 0; i < input.length; i++) {
        let numI = Number(input[i]);
        let current = [numI];
        let count = 1;
        for (let j = i + 1; j < input.length; j++) {
            let numJ = Number(input[j]);
            if (numI === numJ) {
               current[count]  = numJ;
               count++;
            } else {
                break;
            }
        }

        if (current.length > longest.length) {
            longest = [];
            for (let k = 0; k < current.length; k++) {
                longest[k] = current[k];
            }

        }
    }

    console.log(longest.join(' '))
}

solve(
   // [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]
    //  [1, 1, 1, 2, 3, 1, 3, 3]
  //   [4, 4, 4, 4]
     [0, 1, 1, 5, 2, 2, 6, 3, 3]
)

// second solve
function solve(arr) {
    // arr = arr[0].split(' ')
    let longestSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let currentSequence = [currentElement];
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            if (nextElement === currentElement) {
                currentSequence.push(nextElement);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        }
    }
    console.log(longestSequence.join(' '));
}