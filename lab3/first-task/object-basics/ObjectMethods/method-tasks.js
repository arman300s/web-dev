// Task 1: Using "this" in object literal
// error

// Task 2: Create a calculator
//read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
let calculator = {
    read() {
         this.a = prompt("enter a", "");
         this.b = prompt("enter b", "");
    },
    sum() {
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
}

// Task 3: Chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
};