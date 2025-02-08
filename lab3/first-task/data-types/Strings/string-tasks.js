// Task 1: Uppercase the first character
function ucFirst(str) {
    return str[0].toUpperCase(); + str.slice(1);
}

// Task 2: Check for spam
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

// Task 3: Truncate the text
function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength-1) + '...';
    }
}

// Task 4: Extract the money
function extractCurrencyValue(str) {
    return +str.slice(1);
}