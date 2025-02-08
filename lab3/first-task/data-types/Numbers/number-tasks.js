// Task 1: Sum numbers from the visitor
let num1 = prompt("enter a number", '');
let num2 = prompt("enter a number", '');
let sum = num1 + num2;
alert(sum);

// Task 2: Why 6.35.toFixed(1) == 6.3?

// Task 3: Repeat until the input is a number
function readNumber() {
    let num;
    do {
        num = prompt("enter a number", '');
    } while (!isFinite(num));
    if (num == null || num == ''){
        return null;
    }
    return +num;
}

// Task 4: An occasional infinite loop
//This loop is infinite. It never ends. Why?

    let i = 0;
while (i != 10) {
    i += 0.2;
}
// because i is floating num and never equals 10

let i = 0;
while (i<11) {
    i = i+0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}

// Task 5: A random number from min to max
function random(min, max) {
    return min + Math.random() * (max - min);
}

// Task 6: A random integer from min to max
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand); }