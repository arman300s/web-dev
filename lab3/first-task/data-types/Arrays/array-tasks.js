// Task 1: Is array copied?
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ? answer is 4

// Task 2: Array operations.
let styles = ['Jazz', 'Blues'];
styles.push('Rock');
if(styles.length % 2 !== 0){
    let middle = styles.length/2 + 0.5;
    styles[middle] = 'Classic';
}

styles.shift();
styles.unshift("Rap", "Reggae");

// Task 3: Calling in an array context
let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); // ? alert(this)

// Task 4: Sum input numbers
function sumInput() {
    let arr = [];
    while (true) {
        let i = prompt("enter number", '');
        arr.push(i);
        if (i === null ||i === '' || !isFinite(i)){
            break;
        }
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
    }
    return sum;
}

// Task 5: A maximal subarray
function getMaxSubSum(arr) {
    let partialSum = 0;
    let maxSum = 0

    for (let number of arr) {
        partialSum += number;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) {
            partialSum = 0;
        }
        return maxSum;
    }
}