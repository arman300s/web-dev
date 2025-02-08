// Task 1 The postfix and prefix forms
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// Task 2 Assignment result
let a = 2;

let x = 1 + (a *= 2);
// x = 5, a = 4

// Task 3 Type conversions
"" + 1 + 0 // 10 string
"" - 1 + 0 // -1 number
true + false // 1
6 / "3" // 2 number
"2" * "3" // 6 number
4 + 5 + "px" // 9px str
"$" + 4 + 5 // $45 str
"4" - 2 // 2 int
"4px" - 2 // NaN
"  -9  " + 5 // -9 5 str
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // Nan
" \t \n" - 2 // -2

// Task 4 Fix the addition
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3
