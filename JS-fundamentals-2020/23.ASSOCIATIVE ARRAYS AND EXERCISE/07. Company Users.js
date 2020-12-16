function solve(input) {

    let map = new Map();

    for (let line of input) {
        let [company, id] = line.split(' -> ');

        if (!map.has(company)) {
            map.set(company, new Set());
        }

        let existingId = map.get(company);
        existingId.add(id);
    }

    let sorted = Array.from(map).sort((a, b) => a[0][0].localeCompare(b[0][0]));

    for (let arr of sorted) {
        console.log(arr[0]);
        for (let id of arr[1]) {
            console.log(`-- ${id}`);
        }
    }
}

solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])
//solve(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'])