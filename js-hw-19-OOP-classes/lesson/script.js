// OBJECT

const car = {
    color: 'red',
    go() {
        console.log(`${this.color} car goes`)
    },
}

car.go()

// FUNCTION-CONSTRUCTOR

function Car1(color) {
    // tjis = {}
    this.color = color
    this.go = function() {
        console.log(`${this.color} car goes`)
    }
    // return this
}

const myCar = new Car1('gray')
myCar.go()


// CLASS

class Car {
    constructor(color) {
        this.color = color
    }

    go() {
        console.log(`${this.color} car goes`)
    }
}

const firstCar = new Car('green')
console.log(firstCar)
firstCar.go()

class RacingCar extends Car {
    constructor(color, maxSpeed) {
        super(color)
        this.maxSpeed = maxSpeed
    }
    go() {
       super.go()
       console.log(`fast by speed ${this.maxSpeed}`)
    }
}

const racingCar = new RacingCar('blue', 120)
console.log(racingCar)
racingCar.go()