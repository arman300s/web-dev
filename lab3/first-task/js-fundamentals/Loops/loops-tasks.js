// Task 1: What is the last value alerted by this code?
let i = 3;
while (i) {
    alert( i-- );
}
// 1

// Task 2: Which values does the while loop show?
//The prefix form ++i:

    let i = 0;
while (++i < 5) alert( i ); // from 1 to 4
//The postfix form i++

let i = 0;
while (i++ < 5) alert( i );
// from 1 to 5

// Task 3: Which values get shown by the "for" loop?
// 1. The postfix form
for(let i = 0; i<5; i++) alert( i ); //from 0 to 4

// 2. The prefix form
for(let i = 0; i<5; ++i) alert( i ); // from 0 to 4

// Task 4: Output even numbers in the loop
for(let i = 0; i<10; ++i) {
    if(i % 2 === 0) alert( i );
}

// Task 5: Replace "for" with "while"
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}
let i = 0
while(i < 3) {
    alert( i );
    i++;
}

// Task 6: Repeat until the input is correct
let num = 0;
do {
    num = prompt("enter your number", 0);
} while (num <= 100);

// Task 7: Output prime numbers
let n = 10;
for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
        if(isPrime) {
            alert( i );
        }
    }
}

