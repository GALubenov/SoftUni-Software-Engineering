function solve(args) {
    let w = args[0];
    let l = args[1];
    let h = args[2];

    let i = 3;
    let boxNumb = args[i];
    let freeSpace = w * l * h;

    while (freeSpace > 0){
        if (boxNumb === "Done"){
            console.log(`${freeSpace} Cubic meters left`);
            return;
        }else {
            freeSpace -= Number(boxNumb);
            i++;
            boxNumb = args[i];
        }
    }
    console.log (`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);

}
solve([10, 1, 2, 4, 6, "Done"])