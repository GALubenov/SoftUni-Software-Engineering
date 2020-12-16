function solve(input) {
    let obj = {};
    for (let line of input) {
        let [country, city, price] = line.split(' > ');
        price = Number(price);

        if (obj.hasOwnProperty(country)) {
            let exCity = obj[country];

            if (exCity.hasOwnProperty(city)) {
                let existingPrice = exCity[city];
                if (price < existingPrice) {
                    exCity[city] = price
                }
            } else {
                exCity[city] = price
            }
        } else {
            let newObj = {};
            newObj[city] = price;
            obj[country] = newObj;

            // obj[country] = { [city]: price }
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => a[0][0].localeCompare(b[0][0]));

    for (let country of sorted) {
        let result = '';
        let sortPrice = Object.entries(country[1]).sort((a, b) => a[1] - b[1]);
        for (let city of sortPrice) {
           result += `${city[0]} -> ${city[1]} `;
        }
         console.log(`${country[0]} -> ${result}`);
    }
}

solve(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]

)
