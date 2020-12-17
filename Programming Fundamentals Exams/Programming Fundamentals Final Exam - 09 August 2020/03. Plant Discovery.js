function solve(input) {
    input.pop();
    let obj = {};
    let numberOfPlants = Number(input.shift());
    let plantsInfo = input.splice(0, numberOfPlants);

    for (let line of plantsInfo) {
        let [plant, rarity] = line.split('<->');

        obj[plant] = {
            Rarity: Number(rarity),
            Rating: [],
            AverageRating: 0
        }
    }

    for (let line of input) {
        let [command, arguments] = line.split(': ');
        let [plant, firstArgs] = arguments.split(' - ');

        switch (command) {
            case 'Rate': {
                let rating = Number(firstArgs);
                obj[plant].Rating.push(rating);
            }
                break;

            case 'Update': {
                let rarity = Number(firstArgs);
                obj[plant].Rarity = rarity;
            }
                break;

            case 'Reset': {
                obj[plant].Rating = [0];
            }
                break;

            default: (console.log('error'));
        }
    }

    for (let prop in obj) {
        let average = obj[prop].Rating.reduce((acc, item, index, arr) => {
            return acc + item / arr.length;
        }, 0);
        obj[prop].AverageRating = Number(average);
    }

    let sorted = Object.entries(obj)
    .sort((a, b) => {
        let [plantA, itemA] = a;
        let [plantB, itemB] = b;
        let rarityA = itemA.Rarity;
        let rarityB = itemB.Rarity;
        let ratingA = itemA.Rating;
        let ratingB = itemB.Rating;

        if (rarityA - rarityB === 0) {
            return ratingB - ratingA;
        } else {
            return rarityB - rarityA;
        }
    });

      console.log(`Plants for the exhibition:`)
    for (let [plant, items] of sorted) {
          console.log(`- ${plant}; Rarity: ${items.Rarity}; Rating: ${items.AverageRating.toFixed(2)}`);
    }
}
// function average(array) {
//    let result = 0;
//    for (let num of array) { result += num; }
//     return result / array.length;
// }

solve(
    ['3', 'Arnoldii<->4', 'Woodii<->7', 'Welwitschia<->2', 'Rate: Woodii - 10', 'Rate: Welwitschia - 7', 'Rate: Arnoldii - 3', 'Rate: Woodii - 5', 'Update: Woodii - 5', 'Reset: Arnoldii', 'Exhibition']

    // ['2', 'Candelabra<->10', 'Oahu<->10', 'Rate: Oahu - 7', 'Rate: Candelabra - 6', 'Exhibition']
)