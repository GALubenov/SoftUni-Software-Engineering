function first(args) {
    let i = 0;
    let num = args[i];
    while (num <= 3) {
        i++;
        num = args[i];
    }
}
first([1, 2, "3", "4"])

function zavyr6vane(input) {
    let name = input[0];
    let counter = 1;
    let sum = 0;
    let i = 1;
    while (counter <= 12) {
        let grade = Number(input[i]);
        if (grade >= 4) {
            sum += grade;
            counter++;
        }
        i++;
    }
    let average = sum / 12;
    console.log(`Average Grade is = ${average}`)
}
zavyr6vane(["Pescho", 4, 5, 6, 5, 4, 5, 6, 4, 5.5, 4.5, 5, 6])

function forr(argss) {
    
    for (let a = argss[0]; a <= 10; a++) {
        if (a == 5) {
            continue;
        }
    }
}
forr([2])

function colve(ergs) {
    let smallest = Number.MAX_SAFE_INTEGER;
    let biggest = Number.MIN_SAFE_INTEGER;
    let i = 0;
    while (true) {
        let command = ergs[i];
        if (command === "End") {
            break;
        }
        let num = Number(command);
        if (num < smallest) {
            smallest = num;
        }
        if (num > biggest) {
            biggest = num;
        }
        i++;
    }
    console.log(`Biggest Number = ${biggest}`)
    console.log(`Smallest Number = ${smallest}`)
}
colve([1, 40, 55, 2, "End"])

function solve(args) {
    let n = Number(args[0]);
    let sumL = 0;
    let sumR = 0;
    for (let i = 1; i <= n; i++) {
        sumL = sumL + Number(args[i]);
        sumR = sumR + Number(args[i + n]);
    }
    console.log(`Left Sum = ${sumL}`)
    console.log(`Right Sum = ${sumR}`)
}
solve([2, 10, 100, 60, 50]);

function competition(args) {
    let brCake = Number(args[0]);
    let index = 1;
    let comm = args[index];
    let nameOfbaker = "";
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let realWinner = "";
    for (let i = 1; i <= brCake; i++) {
        nameOfbaker = args[index];
        let ocenka = 0;
        while (comm != "Stop") {
            index++;
            comm = args[index];
            if (comm == "Stop") {
                break;
            }
            ocenka += Number(comm);
        }
        console.log(`${nameOfbaker} has ${Number(ocenka)} points.`);
        if (ocenka > maxPoints) {
            console.log(`${nameOfbaker} is the new number 1!`);
            maxPoints = ocenka;
            realWinner = nameOfbaker;
        }
        index++;
        comm = args[index];
    }
    if (maxPoints) {
        console.log(`${realWinner} won competition with ${maxPoints} points!`)
    }
}
competition([3, "Chef Manchev", 10, 10, 10, 10, "Stop", "Natalie", 8, 2, 9, "Stop", "George", 9, 2, 4, 2, "Stop"])

function decoration(args) {
    let clients = Number(args[0]);
    let index = 1;
    let totalSum = 0;
    let averageBill = 0;
    for (let i = 1; i <= clients; i++) {
        let productCounter = 0;
        let product = args[index];
        let productPrice = 0;
        while (product != "Finish") {
            if (product == "basket") {
                productPrice += 1.50;
            } else if (product == "wreath") {
                productPrice += 3.80;
            } else if (product == "chocolate bunny") {
                productPrice += 7;
            }
            index++;
            product = args[index];
            productCounter++;
        }
        if (productCounter % 2 == 0) {
            productPrice -= (productPrice * 0.20);
        }
        console.log(`You purchased ${productCounter} items for ${productPrice.toFixed(2)} leva.`);
        index++;
        product = args[index];
        totalSum += productPrice;
    }
    averageBill = totalSum / clients;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}
decoration([1, "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"])

function test(args) {
    let days = Number(args[0]);
    let na4alenBalans = 60;
    let i = 1;
    let comm = args[i];
    for (let d = 1; d <= days; d++) {
        let cheker = true;
        let counter = 0;
        while (comm != "Day over") {
            if (comm <= na4alenBalans) {
                let priceOfProduct = Number(args[i]);
                na4alenBalans -= priceOfProduct;
                counter++;
                if (na4alenBalans == 0) {
                    console.log(`Daily limit exceeded! You've bought ${counter} products.`);
                    cheker = false;
                    break;
                }
            }
            i++;
            comm = args[i];
        }
        if (cheker == true) {
            console.log(`Money left from today: ${(na4alenBalans).toFixed(2)}. You've bought ${counter} products.`);
        }
        i++;
        comm = args[i];
        na4alenBalans += 60;
    }
}
test([3, 20,40,40,15, "Day over", 15, 5,10,17,10, "Day over"])