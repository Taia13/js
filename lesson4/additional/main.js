//створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function creatArrg(firstArguments,arr) {
    let res = 0;
    if(arguments.length > 1){
        res = firstArguments + arr;
    }else{
        console.log(firstArguments);
    }
    return res;
}
let a = creatArrg('14', '55');
console.log(a);

//створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function creatSumArr(arr1,arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
       arr3.push(arr1[i]+arr2[i]);
        
    }
    console.log(arr3);
    return arr3;
}
creatSumArr([1,2,3,4], [2,3,4,5]);
//Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function creatArr(users) {
    let key = [];
    for (const userElement of users) {
        for (const userElementKey in userElement) {
            key.push(userElementKey);

        }
        console.log(key);
    }return key;
    
}
creatArr([{name: 'Dima', age: 13}, {model: 'Camry'}]);
//Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function creatArr1(users) {
    let key1 = [];
    for (const userElement of users) {
        key1.push(userElement.name, userElement.age, userElement.model);
    }
         console.log(key1);
   // return key1
}
creatArr1([{name: 'Dima', age: 13}, {model: 'Camry'}]);
