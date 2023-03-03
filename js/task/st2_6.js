// Задача: напишите программу с разными математическими операторами и разными типами данных. Например, сложите строки, строку с числом, число с булевым значением и так далее

let a = 'JavaScript';
let b = 33;
let c = true;
let d = false;
let e = NaN;
let f = undefined;

console.log(`Example #1: '${a}' + ${b} = ${a + b} (число 33 преобразуется к строке)`);
console.log(`Example #2: '${a}' + ${c} = ${a + c} (булевое значение преобразуется к строке)`);
console.log(`Example #3: '${a}' * ${b} = ${a * b} (операции со строкой кроме '+' возвращают NaN)`);
console.log(`Example #4: '${a}' - ${c} = ${a - c} (операции со строкой кроме '+' возвращают NaN)`);
console.log(`Example #5: ${b} + ${c} = ${b + c} (булевое 'true' становится 1)`);
console.log(`Example #6: ${b} - ${d} = ${b - d} (булевое 'false' становится 0)`);
console.log(`Example #7: ${b} + ${e} = ${b + e} (любые операции с NaN возвращают NaN)`);
console.log(`Example #8: '${a}' + ${f} = ${a + f} (undefined преобразуется в строку)`);
console.log(`Example #9: ${b} + ${f} = ${b + f} (любые операции с undefined, кроме сложения со строкой возвращают NaN)`);
console.log(`Example #10: ${c} + ${d} = ${c + d} (true преобразуется к 1, false становится 0)`);
console.log(`Example #11: ${e} + ${f} = ${e + f} (любые операции с NaN возвращают NaN)`);
console.log(`Example #12: '${a}' + ${b} + ${c} = ${a + b + c} (все операнды преобразовались к строке)`);
console.log(`Example #13: '${a}' + ${b} - ${c} = ${a + b - c} ('JavaScript33 - 1 = NaN')`);