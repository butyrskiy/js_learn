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



function something(name, age) {
    newName = name + ', ' + age + ' годика. ' + 'Скоро едем в Питер!';
    console.log(newName);

    if(name == 'Женечка') {
        let newName2 = name + ', ' + age + ' годиков. ' + 'Скоро едем в Питер!';
        console.log(newName2);
    }
}

something('Denis', 33);
something('Женечка', 26);