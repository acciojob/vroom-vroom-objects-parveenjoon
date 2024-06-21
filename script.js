// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar inheriting from Car
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call the Car constructor with make and model
    this.topSpeed = topSpeed;
}

// Inheriting Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
