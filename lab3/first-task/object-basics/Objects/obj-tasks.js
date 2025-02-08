// Task 1: Hello, object
let user = {
    name: "John",
    surname: "Smith"
}
user.name = "Pete";
delete user.name;


// Task 2: Check for emptiness
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Task 3: Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function salarySum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum = sum + salaries[key];
    }
    return sum;
}

// Task 4: Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}
