// Task 1:Two functions – one object
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

// Task 2: Create new Calculator
function Calculator() {
    this.read = function(){
        this.a = prompt("enter a", '');
        this.b = prompt("enter b", '');
    }
    this.sum = function(){
        return this.a + this.b;
    }
    this.mul = function(){
        return this.a * this.b;
    }
}

// Task 3: Create new Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(){
        this.value = this.value + prompt("enter a number", '');
    }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value);