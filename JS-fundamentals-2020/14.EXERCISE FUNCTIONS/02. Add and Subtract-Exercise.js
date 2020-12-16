function solve(firstInteger, secondInteger, thirdInteger) {

    function sum(firstInteger, secondInteger) {
        return firstInteger + secondInteger;
    }

    function subtract(sum, thirdInteger) {
        return sum - thirdInteger;
    }

    console.log(subtract(sum(firstInteger, secondInteger), thirdInteger))
}

solve(1, 17, 30)