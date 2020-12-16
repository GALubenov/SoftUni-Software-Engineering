function solve(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
        
            if (currentElement + nextElement === num) {
                console.log(`${currentElement} ${nextElement}`)
            }
        }
    }
}

solve(
  //  [1, 7, 6, 2, 19, 23], 8
     [14, 20, 60, 13, 7, 19, 8],27
    // [1, 2, 3, 4, 5, 6],6

)