// Task 1: What's the result of OR?
alert( null || 2 || undefined ); //2
// Task 2: What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) ); // 1 after that is 2
// Task 3: What is the result of AND?
alert( 1 && null && 2 ); // null
//Task 4: What is the result of AND'ed alerts?
alert( alert(1) && alert(2) ); // 1 and undefined
// Task 5: The result of OR AND OR
alert( null || 2 && 3 || 4 ); // 3
// Task 6: Check the range between
if (age >= 14 && age <= 90);
// Task 7: Check the range outside
if (age <=14 || age>=90);
if (!(age >= 14 && age <= 90));
// Task 8: A question about "if"
if (-1 || 0) alert( 'first' ); // outputs -1
if (-1 && 0) alert( 'second' ); // no output
if (null || -1 && 1) alert( 'third' ); // third
// Task 9: Check the login
let login = prompt("Please enter login", "");
if (login == "Admin"){
    let password = prompt("Please enter password", "");
    if (password =="" || null) {
        alert( "cancelled" );
    }
    else if (password == "TheMaster"){
        alert( "Welcome" );
    }
    else {
        alert( "Wrong password" );
    }
}
else if (login == "" || null) {
    alert( "cancelled" );
}
else {
    alert( "i dont know you" );
}




