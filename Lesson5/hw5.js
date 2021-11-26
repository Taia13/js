//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let sRectangle = (a, b) => a * b;
console.log(sRectangle(10, 20));
//створити функцію яка обчислює та повертає площу кола
let sCircle = (r) => Math.PI * Math.pow(r, 2);
console.log(sCircle(10));
//створити функцію яка обчислює та повертає площу циліндру
let sСylinder = (r, h) => 2 * Math.PI * r * h;
console.log(sСylinder(10, 10));
//створити функцію яка приймає масив та виводить кожен його елемент
let mas = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
mas([1,3.90,60]);
//створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let creatP = (text) => {
    document.write(`<p>${text}</p>`);
}
creatP('hello world');
//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let creatLi = (text) =>{
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
creatLi('hello');
//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let writeLi = (text,size)=>{
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
       document.write(`<li>${text}</li>`);

    }document.write(`</ul>`);
}
writeLi('hello',3);
//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass = (arr)=>{
document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);

    }document.write(`</ul>`);
}
mass([30,'html',true]);
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'olia', age: 25},
    {id: 2, name: 'tania', age: 26},
    {id: 3, name: 'ira', age: 27}
];
let creatUsers =(arr2)=>{
    for (const arr2Element of arr2) {
        document.write(`<div>${arr2Element.id} ${arr2Element.name} ${arr2Element.age}</div>`);
    }

    }
    creatUsers(users);

