//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let a =  [12, 4, 7, 2.3, 89];
console.log(a);
let b = [ 'one',' two', 'three', 'four','five'];
console.log(b);
let c = [22, true, 'one', 78, false];
console.log(c);
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let day = [];
day[0]= 1;
console.log(day);
day[1]= 'monday';
console.log(day);
day[2]= 3;
day[3]= 'wednesday';
day[4]= 5;
console.log(day);
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
  //  document.write( '<div>hello world</div>');
    document.write(`<div> day ${i}</div>`);
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while (i<20) {
   // document.write('<h1>hello world</h1>');
    document.write(`<h1>list ${i}</h1>`);
    i++;
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [1,2,3,4,5,6,7,8,9,10];
for (let j = 0; j < numbers.length; j++) {
    console.log(numbers [j]);

}
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str = ['a','b','c','d','e','f','g','h','i','j'];
for (let j = 0; j < str.length; j++) {
    console.log(str[j]);

}
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//let any = [3,true,'one',6.4,false,'file',55,0, 'help', 9];
//for (let j = 0; j < any.length; j++) {
  //  console.log(any[j]);
    //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
   // let any = [3,true,'one',6.4,false,'file',55,0, 'help', 9];
//for (let j = 0; j < any.length; j++) {
  //  if(typeof any[j] === `boolean`){
      //  console.log(any[j]);
//}
//}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//let any = [3,true,'one',6.4,false,'file',55,0, 'help', 9];
//for (let j = 0; j < any.length; j++) {
  //  if(typeof any[j] === `number`){
    //console.log(any[j]);
//}
//}
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let any = [3,true,'one',6.4,false,'file',55,0, 'help', 9];
//for (let j = 0; j < any.length; j++) {
  //  if (typeof any[j] === 'string'){
    //    console.log(any[j]);
   // }

//}
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//  let item = [];
// item[0]= 8;
// item[1]= true;
// item[2]= 'line';
// item[3]= 76;
// item[4]= false;
// item[5]= 'go';
// item[6]= 0;
// item[7]= true;
// item[8]= 3;
// item[9]= 'come';
// for (let j = 0; j < item.length; j++) {
//     console.log(item[j]);

//}
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);

}
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);

}
for (let j = 0; j < 100; j+=2) {
    console.log(j);
    document.write(`<div>${j}</div>`);

}
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 2; j <100; j++) {
 if (j % 2 === 0) {
       console.log(j);
       document.write(`<div>${j}</div>`);

   }

}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 1; j < 100; j++) {
    if( j%2 !== 0 ){
        console.log(j);
        document.write(`<div>${j}</div>`);
    }

}