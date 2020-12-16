function solve(input) {

    for (let line of input) {
        let [town, lat, lon] = line.split(' | ');
        lat = Number(lat).toFixed(2);
        lon = Number(lon).toFixed(2);

        let obj = { town: town, latitude: lat, longitude: lon };
        console.log(obj)
    }
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])