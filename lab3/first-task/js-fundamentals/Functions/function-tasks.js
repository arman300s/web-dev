// Task 1: Is "else" required?
// no, not required

// Task 2: Rewrite the function using '?' or '||'
function checkAge(age) {
    return (age>18) ? true : "Did your parents allow?";
}

// Task 3: Function min(a, b)
function min(a, b) {
    return (a>b) ? b : a;
}

// Task 4: Function pow(x,n)
function pow(x, n) {
    return x ** n;
}

let num = prompt("enter a number", '');
pow(num, 5);
