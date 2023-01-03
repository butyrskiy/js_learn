// Задача: напишите программу с разными математическими операторами и разными типами данных. Например, сложите строки, строку с числом, число с булевым значением и так далее

let a = "Denis";
let b = 33;
let c = true;
let d = false;
let e = NaN;
let f = undefined;

let sample1 = a + b;
let sample2 = a + c;
let sample3 = a * b;
let sample4 = a * c;
let sample5 = b / c;
let sample6 = b + e;
let sample7 = b + f;
let sample8 = c + d;
let sample9 = e + f;
let sample10 = a + b + c;
let sample11 = ++b;
let sample12 = (a += ++b);

console.log(sample1);
console.log(sample2);
console.log(sample3);
console.log(sample4);
console.log(sample5);
console.log(sample6);
console.log(sample7);
console.log(sample8);
console.log(sample9);
console.log(sample10);
console.log(sample11);
console.log(sample12);

// Пример
let value;

// Number to string
value = String(10);
value = String(10 + 40);
value = (40).toString();

// Boolean to string
value = String(false);
// Array to string
value = String([1, 2, 3]);
// Object to string
value = String({ name: "Denis" });

value = 30 + "" + undefined;
value = 30 * "5";
value = false + undefined;

// String to number
value = Number("23");
value = Number(false);
value = Number(null);
value = Number("false");
value = Number([1, 2, 3]);

value = parseInt("200px");
value = parseFloat("200.212px");

// Boolean
value = Boolean("hello");
value = Boolean("");
value = Boolean(-100);
value = Boolean(0);
value = Boolean(undefined);
value = Boolean(null);
value = Boolean({});
value = Boolean([]);

console.log(value);
console.log(typeof value);
