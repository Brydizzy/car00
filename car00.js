//Part one 

class Vehicle {
    constructor("infiniti","Q50", 2014) {
      this.make ="infiniti";
      this.model ="Q50";
      this.year = 2014;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }


  //Part two 

  class Car extends Vehicle {
    constructor(infiniti, q50, 2014) {
      super(infiniti, q50, 2014);
      this.numWheels = 4;
    }
  }

  //Part three

  class Motorcycle extends Vehicle {
    constructor(Honda, Grom, 2024) {
      super("Honda","Grom", 2024);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }