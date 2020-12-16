class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
        this.price = 0;
    }

    getPrice() {
       this.price = (800 - (this.info.age * 2) + (this.info.quality * 0.5));
    }

    turnOn() {

    }

    turnOff() {

    }

    showInfo() {

    }


}

let info = { producer: "Dell", age: 2, brand: "XPS" }
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
