// Task 1: Filter unique array members
function unique(arr) {
    return Array.from(new Set(arr));
}

// Task 2: Filter anagrams
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

// Task 3: Iterable keys
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
