//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function srectangle(a, b) {
    return a * b;
}

srectangle(10, 15);
console.log(srectangle(10, 15));

//створити функцію яка обчислює та повертає площу кола з радіусом r
function scircle(r) {
    return Math.PI * Math.pow(r, 2);

}

scircle(5);
console.log(scircle(5));

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function scylinder(h, r) {
    return 2 * Math.PI * h * r;

}

console.log(scylinder(12, 5));

//створити функцію яка приймає масив та виводить кожен його елемент
function printMas(mas) {
    for (const item of mas) {
        console.log(item);

    }

}
printMas([2,3,6,7]);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writeP(text) {
    document.write(`<p>${text}</p>`);

}

writeP('hello');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl1(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);

}

createUl1('item 1');

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUL(text, size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`);

    }
    document.write(`</ul>`);

}

createUL('hello', 5);

//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function printArr(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}
printArr([2,4,'hello',true,5,false]);
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'olia', age: 25},
    {id: 2, name: 'tania', age: 26},
    {id: 3, name: 'ira', age: 27}
];
function creatUsers(x) {
    for (let i = 0; i < x.length; i++) {
        document.write(`<div>${x[i].id} ${x[i].name} ${x[i].age}</div>`);
    }

}
creatUsers(users);


