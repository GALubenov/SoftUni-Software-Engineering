function solve(name, lastName, hairColor) {

    let obj = {
        name,
        lastName,
        hairColor
    }

    let result = JSON.stringify(obj);
    console.log(result);
}

solve(
    'George',
    'Jones',
    'Brown'

)