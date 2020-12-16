function solve(numOne, numTwo, numThree) {
    let result = numOne * numTwo * numThree;

    console.log(result)


    function req(x) {   // рекурсия
        console.log(x)
        if (x > 0) {
            req(x - 1);
        }
    }
    req(5)



}

solve(
    5, 12, -15 // negative
    //  - 6, -12, 14 // positive
    //   - 1, -2, -3// negative
    //  - 1, 0, 1// positive
)