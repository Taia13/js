//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let numbr = (a, b, c) => {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    } else if (c > a && c > b) {
        if (a > b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    }
}
numbr(5, 3, 8);
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let number = (a, b, c) => {
    if (a < b && a < c) {
        if (b < c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    }
    if (b < a && b < c) {
        if (a < c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    }
    if (c < a && c < b) {
        if (a < b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }
    }
}
number(19, 4, -4);
//- створити функцію яка повертає найбільше число з масиву
let findMax = (arrs) => {
    let max = arrs[0];
    for (const arr of arrs) {
        if (arr > max)
            max = arr;
    }

    return max;
}
let x = findMax([2, 6, 90, -3]);
console.log(x);
//- створити функцію яка повертає найменьше число з масиву
let findMin = (arrs)=>{
    let min = arrs[0];
    for (const arr of arrs) {
        if (arr<min)
            min = arr;
            }return min;
}
let m = findMin([9,6,0,55]);
console.log(m);
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
 let sumNum = (mas)=>{
     let sum = 0;
     for (const m of mas) {
         sum += m;
     }return sum;
 }
 let s = sumNum([1,2,10]);
console.log(s);
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let averNum = (array) =>{
    let aver = 0;
    for (const arrayElement of array) {
        aver += arrayElement;
    } return aver/array.length;
}
let v = averNum([1,3,8,10]);
console.log(v);
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let creatNum = (mas) =>{
    let max =mas[0];
    let min =mas[0];
    for (const m of mas) {
        if (m>max){
            max = m;
            console.log(max);
        }if (m<min){
            min = m;
        }

        console.log(min);
    }return min;
}
let a= creatNum([2,9,100,6,99]);
//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let creatRandom = (num,size)=>{
    let number1 = [];
    for (let i = 0; i <size; i++) {


        number1[i]= Math.pow*(Math.random()*num);

    }

   return number1;
}
let g = creatRandom(100,10);
console.log(g);
//Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reversMas = (mass)=>{
    let newMass = [];
    for (let i = mass.length -1; i >=0; i--) {
        const massElement = mass[i];
        newMass.push(massElement);

    }
    console.log(newMass);
    return newMass;
}
reversMas([1,2,3]);


