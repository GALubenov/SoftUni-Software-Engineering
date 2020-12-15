function cake(args) {
    let lenght = Number(args[0]);
    let width = Number(args[1]);
    let areaOfCake = lenght * width;

    let leftPieces = 0;
    let currentNum = 0;
    let elementInMasive = args.length;
    let i = 0;
    while (i <= elementInMasive - 2) {
        currentNum = args[i + 2];
        if (areaOfCake >= currentNum) {
            leftPieces = areaOfCake - currentNum;
            areaOfCake -= currentNum;
        } else if (currentNum > areaOfCake) {
            leftPieces = areaOfCake - currentNum;
        } else if (currentNum == "STOP") {
            break;
        } i++;
    }
    if (leftPieces >= areaOfCake) {
        console.log(leftPieces + " pieces are left.")
    } else {
        console.log("No more cake left! You need " + Math.abs(leftPieces) + " pieces more.")
    }
}
cake([10, 2, 2, 4, 6, "STOP"])