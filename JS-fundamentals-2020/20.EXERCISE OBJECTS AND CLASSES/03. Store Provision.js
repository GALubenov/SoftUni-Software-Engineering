function solve(currentStock, productArr) {

    let obj = {}

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        obj[product] = quantity;
    }

    for (let i = 0; i < productArr.length; i += 2) {
        let product = productArr[i];
        let quantity = Number(productArr[i + 1]);

        if (obj.hasOwnProperty(product)) {
            obj[product] += quantity;
        } else {
            obj[product] = quantity;
        }
    }

    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])