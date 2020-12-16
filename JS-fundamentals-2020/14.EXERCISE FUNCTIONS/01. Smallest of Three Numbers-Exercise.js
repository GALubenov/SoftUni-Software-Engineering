function solve(firstInteger, secondInteger, thirdInteger) {

    let result = Number.MAX_SAFE_INTEGER

    if (firstInteger < result) {
        result = firstInteger
    } 
    
    if (secondInteger < result) {
        result = secondInteger
    } 
    
    if (thirdInteger < result) {
        result = thirdInteger
    }

    console.log(result)
}

solve(
    25,
    21,
    4
    


)