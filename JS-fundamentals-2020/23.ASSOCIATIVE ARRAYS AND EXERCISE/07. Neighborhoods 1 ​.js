function solve(input) {

    let map = new Map()
    let neighborhoods = input
        .shift()
        .split(', ');
    for (let el of neighborhoods) {
        map.set(el, [])
    }

    for (let string of input) {
        let parts = string.split(' - ')
        let neighborhood = parts[0]
        let person = parts[1]

        if (map.has(neighborhood)) {
            let existingPerson = map.get(neighborhood)
            existingPerson = map.get(neighborhood).concat(person)
            map.set(neighborhood, existingPerson)
        }
    }

    let sorted = [...map]
    .sort((a, b) => b[1].length - a[1].length)
    for (let [neighborhood, inhabitants ] of sorted) {
        console.log(`${neighborhood}: ${inhabitants.length}`)

        for (let person of inhabitants) {
            console.log(`--${person}`)
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)