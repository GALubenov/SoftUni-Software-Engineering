function biskviti(input) {
    let flour = false;
    let eggs = false;
    let sugar = false;
    
    let index = 0;
    let productCount = 0;
    let n = Number(input[index]);
    while (productCount < n) {
        index++;
        let currentElement = input[index];
        
        while (currentElement != "Bake!") {
            if (currentElement == "flour") {
                flour = true;
            } else if (currentElement == "eggs") {
                eggs = true;
            } else if (currentElement == "sugar") {
                sugar = true;
            }
            index++;
            currentElement = input[index];
        }
        if (eggs && sugar && flour) {
            productCount++;
            console.log(`Baking batch number ${productCount}...`)
            let flour = false;
            let eggs = false;
            let sugar = false;
        } else {
            console.log(`The batter should contain flour, eggs and sugar!`);
        }
    }
}
biskviti([2, "flour", "eggs", "sugar", "chocolate", "Bake!", 
"flour", "eggs", "sugar", "caramel", "peanuts", "Bake!"]);

//второ решение
function ddd(args) {
    let index = 0;
    let productCount = 0;
    let n = args[index];
    let flour = false;
    let eggs = false;
    let sugar = false;
    while (productCount < n) {
        index++;
        let currentProduct = args[index];
        while (currentProduct != "Bake!") {
            if (currentProduct == "flour") {
                flour = true
            } else if (currentProduct == "eggs") {
                eggs = true
            } else if (currentProduct == "sugar") {
                sugar = true
            }
            index++;
            currentProduct = args[index];
        }
        if (flour && eggs && sugar) {
            productCount++;
            console.log(`Baking batch number ${productCount}...`);
            flour = false;
            eggs = false;
            sugar = false;
        } else {
            console.log(`The batter should contain flour, eggs and sugar!`);
        }
    }
}
ddd([3, "flour", "eggs", "jam", "Bake!", "sugar", "Bake!", 
"flour", "eggs", "milk", "almonds", "sugar", "Bake!", "flour", "eggs", "sugar", "Bake!"])