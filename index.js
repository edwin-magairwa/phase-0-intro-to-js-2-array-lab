// The initial cats array is defined in the test file and reset before each test
const cats = ["Milo", "Otis", "Garfield"];

// Appends a cat to the end of the array (non-destructive)
function appendCat(name) {
    return [...cats, name];
}

// Prepends a cat to the beginning of the array (non-destructive)
function prependCat(name) {
    return [name, ...cats];
}

// Removes the last cat from the array (non-destructive)
function removeLastCat() {
    return cats.slice(0, -1);
}

// Removes the first cat from the array (non-destructive)
function removeFirstCat() {
    return cats.slice(1);
}

// Appends a cat to the end of the array (destructive)
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Prepends a cat to the beginning of the array (destructive)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Removes the last cat from the array (destructive)
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Removes the first cat from the array (destructive)
function destructivelyRemoveFirstCat() {
    cats.shift();
}

