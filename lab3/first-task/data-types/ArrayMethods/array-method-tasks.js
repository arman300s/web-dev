// Task 1: Translate border-left-width to borderLeftWidth
function camelize(str) {
    let arr = str.split('-');
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i].toUpperCase();
        result.push(i);
    }
    return result;
}

// Task 2: Filter range
function filterRange(arr, a, b) {
    let filter = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            filter.push(arr[i]);
        }
    }
    return filter;
}

// Task 3: Filter range "in place"
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

// Task 4: Sort in decreasing order
function sort(arr) {
    arr.sort((a, b) => a - b);
    return arr.reverse();
}

// Task 5: Copy and sort array
function copySorted(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

// Task 6: Create an extendable calculator
function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };
    this.calculate = function(str) {
        let expression = str.split(' '),
            a = +expression[0];
            operation = expression[1];
            b = +expression[2];
        if (!this.methods[operation] || isNan(a) || isNan(b)) {
            return NaN;
        }
        return this.methods[operation](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

// Task 7: Map to names
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = users.map(user => user.name);
*/

// Task 8: Map to objects
/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];
let usersMapped = users.map(user =>({
    fullName:`${user.name}${user.surname}`,
    id: user.id,
}))*/

// Task 9: Sort users by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arrr = [ pete, john, mary ];
function sortByAge(arr){
    arrr.sort((a, b) => a.age - b.age);
}

// Task 10: Shuffle an array
function shuffleArray(arr) {
    arrr.sort(() => Math.random() - 0.5)
}

// Task 11: Get average age
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// Task 12: Filter unique array members
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

// Task 13: Create keyed object from array
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

