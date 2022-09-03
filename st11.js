function calc(operator, a, b) {
    if (operator == 'add') {
        return a + b;
    }
    else if (operator == 'multi') {
        return a * b;
    }
    else if (operator == 'subtract') {
        return a - b;
    }
}

console.log (calc('add', 5, 5));
console.log (calc('multi', 5, 5));
console.log (calc('subtract', 10, 5));