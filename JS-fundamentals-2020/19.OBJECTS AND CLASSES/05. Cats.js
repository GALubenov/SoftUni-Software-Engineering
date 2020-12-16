function solve(input) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let str of input) {
        let [name, age] = str.split(' ');

        cats.push(new Cat(name, age));
    }

    for (let cat of cats) {
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);

function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        catMeow() {
            return `${this.name}, age ${this.age} says Meow`
        }
    }

    for (let parts of input) {
        let catParts = parts.split(' ')
        let name = catParts[0]
        let age = catParts[1]

        let newCat = new Cat(name, age)
        console.log(newCat.catMeow())
    }
}