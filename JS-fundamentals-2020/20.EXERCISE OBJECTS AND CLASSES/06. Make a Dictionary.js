function solve(input) {
    let dict = [];

    for (let line of input) {
        dict.push(JSON.parse(line));
    }

    let sorted = dict.sort((a, b) => {
        return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
    });

    for (let obj of sorted) {
        console.log(`Term: ${Object.keys(obj)} => Definition: ${Object.values(obj)}`)
    }
}

solve(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]

)