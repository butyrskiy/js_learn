function calc(a, b, identifier) {
    if(identifier === 'add') {
        return a + b;
    }
   else if(identifier === 'multi') {
    return a * b;
   }
   else if(identifier === 'sub') {
    return a - b;
   }
   else {
    console.log('Invalid identifier');
   }
}

console.log(calc(1,2,'add'));
console.log(calc(3,5,'multi'));
console.log(calc(1,4,'sub'));