function solve(jsonString) {

    let person = JSON.parse(jsonString);

    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`)
    }

}

solve(
    '{"name": "George", "age": 40, "town": "Sofia"}'
)