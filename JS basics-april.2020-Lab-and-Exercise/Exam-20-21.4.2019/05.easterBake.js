function bake(args) {
    let brCake = Number(args[0]);
    let comm = args.length

    let sugar = 0;
    let flour = 0;
    let brSugar = 0;
    let brFlour = 0;
    let maxSugar = Number.MIN_SAFE_INTEGER;
    let maxFlour = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < comm; i++) {
        let counter = Number(args[i])
        if (i % 2 !== 0) {
            sugar += counter;
            brSugar = sugar / 950;
            if (counter > maxSugar) {
                maxSugar = counter;
            }
        } if (i % 2 === 0) {
            flour += counter;
            brFlour = flour / 750;
            if (counter > maxFlour) {
                maxFlour = counter;
            }
        }
    }
    console.log(`Sugar: ${Number(Math.ceil(brSugar))}`);
    console.log(`Flour: ${Number(Math.ceil(brFlour))}`);
    console.log(`Max used flour is ${Number(maxFlour)} grams, max used sugar is ${Number(maxSugar)} grams.`);
}
bake([4,
    500,
    350,
    560,
    430,
    600,
    345,
    578,
    543
])