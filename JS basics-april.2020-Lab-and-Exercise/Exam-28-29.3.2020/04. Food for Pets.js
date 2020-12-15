function solve(input) {
    let day = +input.shift();
    let food = +input.shift();
    let totalFood = 0;
    let dogFood = 0;
    let catFood = 0;
    let sumBiscuits = 0;
    let dayCount = 1;

    for (let i = 0; i < input.length; i += 2) {
        let dog = +input[i];
        let cat = +input[i + 1];
        dogFood += dog;
        catFood += cat;
        totalFood += dog + cat;

        if (dayCount % 3 === 0) {
            sumBiscuits += (dog + cat) * 0.1;
        }
        dayCount++;
    }
    
    console.log(`Total eaten biscuits: ${sumBiscuits.toFixed()}gr.`)
    console.log(`${((totalFood / food) * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${((dogFood / totalFood) * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${((catFood / totalFood) * 100).toFixed(2)}% eaten from the cat.`)
}

solve(
   // [3, 1000, 300, 20, 100, 30, 110, 40]
    [3, 500, 
        100, 30, 110, 25, 120, 35,
       // 100, 30, 110, 25, 120, 35,
        //100, 30, 110, 25, 120, 35
    ]
)