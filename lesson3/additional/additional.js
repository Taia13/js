//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let mas = [];
for (let i = 0; i <= 100; i++) {
   if (i % 2 ===0){
      mas[i]= i;
      console.log(mas);
      document.write(`<div>${[i]}</div>`);
   }
}
let mas1 = [];
for (let i = 0; i <= 100; i++) {
   if(i % 2 !== 0){
      mas1[i]= i;
      console.log(mas1);
      document.write(`<div>${[i]}</div>`);
   }

}
let mas2 = [];
for (let i = 0; i < 20; i++) {
  mas2[i] = Math.round((Math.random()*20));
   console.log(mas2[i]);
   document.write(`<div>${mas2[i]}</div>`);
}
let mas3 = [];
for (let i = 0; i < 20; i++) {
   mas3[i] = Math.round((Math.random()*(732-8)+8));
   console.log(mas3[i]);
   document.write(`<div>${mas3[i]}</div>`);

} //Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < mas3.length; i+=3) {
   console.log(mas3[i]);
}
//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < mas3.length; i+=3) {
   if ( i % 2 === 0){
      console.log(mas3[i]);
   }
}
// Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newmas = [];
for (let i = 0; i < mas3.length; i+=3) {
   if (i % 2 === 0){
      newmas[i] = mas3[i];
      console.log(newmas[i]);

   }
}
//Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
 let x =[2,5,3,15,66,22,11,13,17,28,95,1,76,333,9,8,57,88,100,0];

 for (let i = 0;  i < x.length; i++) {

    if (x[i + 1] % 2 === 0) {
       console.log(x[i]);

    }
 }

//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let numbers= [100,250,50,168,120,345,188];
 let sum = 0;
for (let i = 0; i < numbers.length; i++) {
sum += numbers[i];
avg = sum/numbers.length;
}
console.log(avg);
//Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let numbr = [];
 let numbr1 = [];
for (let i = 0; i < 10; i++) {
  numbr[i]= Math.round((Math.random()*20));
  numbr1[i] = numbr[i]*5;

    console.log(numbr1[i]);
}
//Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mas4=[4, true, 'five','zero',6, 11,false];
let mas5 = [];
for (let i = 0; i < mas4.length; i++) {
    if (typeof mas4[i]=== 'number'){
        mas5[i] = mas4[i];
        console.log(mas5[i]);
    }

}
//Дано 2 масиви з рівною кількістю об'єктів.
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id){
            user.adress = city;



        }
    }
}
console.log(usersWithId);
// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let xxx = [2,5,3,15,66,22,11,13,17,28];
for (let i = 0; i < xxx.length; i++) {
  if (xxx[i] % 2 === 0 ){
      console.log(xxx[i]);
  }

}
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let xxx1= [];
for (let i = 0; i < xxx.length; i++) {
    xxx1[i] = xxx[i] ;

}
console.log(xxx1);
//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let aaa = [ 'a', 'b', 'c'] ;
let str = '';
for (let i = 0; i < aaa.length; i++) {
   str = str + aaa[i];

}
console.log(str);
//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let aaa2 = [ 'a', 'b', 'c'] ;
i=0;
while (i < aaa2.length){
    str = str + aaa2[i];
    i++
}
console.log(str);
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let aaa1 = [ 'a', 'b', 'c'] ;
let str1 = '';
for (const string of aaa1) {
    str1 = str1+ string;

}
console.log(str1);