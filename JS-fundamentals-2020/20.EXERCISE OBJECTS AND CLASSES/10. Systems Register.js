function solve(input) {

    let obj = {};

    for (let line of input) {
        let [system, component, subcomponent] = line.split(' | ');

        if (!obj.hasOwnProperty(system)) {
            obj[system] = {};
        }

        if (!obj[system].hasOwnProperty(component)) {
            obj[system][component] = [];
        }

        obj[system][component].push(subcomponent);
    }

    let entries = Object.entries(obj).sort(sorted);

    for (let [system, items] of entries) {
        console.log(system);

        let sorted = Object.entries(items).sort((a, b) => {
            let subcomponent1 = a[1].length;
            let subcomponent2 = b[1].length;
            return subcomponent2 - subcomponent1;
        });

        for (let [component, subcomponents] of sorted) {
            console.log(`|||${component}`);

            for (let subcomponent of subcomponents)
            console.log(`||||||${subcomponent}`);
        }
    }

    function sorted(firstParam, secondParam) {
        let [system1, items1] = firstParam;
        let [system2, items2] = secondParam;

        let component1 = Object.keys(items1);
        let component2 = Object.keys(items2);

        let firstCriteria = component2.length - component1.length;

        if (component2.length - component1.length === 0) {
            return system1.localeCompare(system2);
        }

        return firstCriteria;
    }
}

solve(
    ['SULS | Main Site | Login Page',
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',

        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security']

)