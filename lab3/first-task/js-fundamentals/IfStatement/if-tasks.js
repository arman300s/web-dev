// Task 1 if (a string with zero)
if ("0") {
    alert( 'Hello' );
}
// Answer: it will be shown

// Task 2: The name of JavaScript
let answer = prompt ("What is the official name of JavaScript", "");
if (answer == "ECMAScript") {
    alert( 'Right answer' );
}
else {
    alert( 'Something went wrong' );
}

// Task 3: Show the sign
let number = prompt ("Enter number",0)
 if (number > 0 ) {
    alert( 1 );
}
else if (number < 0 ) {
    alert( -1 );
}
else {
    alert( 0 );
 }

// Task 4: Rewrite 'if' into '?'
/*
let result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}
*/
// Rewritter version:
let result = (a+b<4) ? "Below" : "Over";

// Task 5: Rewrite 'if..else' into '?'

/*
let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}
*/
let message = (login == 'Employee') ? "Hello" :
    (login == "Director") ? "Greetings" :
        (login == "") ? "No login":
            "";

