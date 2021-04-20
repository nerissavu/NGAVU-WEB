class Car {
    name;
    speed;
    seats;
    brand;
    constructor(name, speed, seats, brand){
        this.name = name;
        this.speed = speed;
        this.seats = seats;
        this.brand = brand;
    }

    honk() {
        console.log(this.brand + " sound")
    }
    start(){}
    stop() {}
} 

class SuperCar extends Car {
    topSpeed;
    static getLimitedSpeed() {
        return 300;
    }
    constructor(name, speed, seats, brand, topSpeed){
        super(name, speed, seats, brand)
        this.topSpeed = topSpeed;
    }

    turboBoost() {
        console.log(this.name + "is boosting to" + this.topSpeed)
    }

    honk() {
        super.honk();
        console.log('New '+ this.brand + " sound")
    }
}

const myCar = new Car("Fadil", 100, 5, "VinFast")
const aliceCar = new Car("Vios", 120, 5, "Toyota")

myCar.honk();
aliceCar.honk();

const bobCar = new SuperCar("Ferrari Spider", 150, 2, "Ferrari", 250)
bobCar.honk()

console.log(SuperCar.getLimitedSpeed())