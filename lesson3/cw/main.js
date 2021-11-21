//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while
let number = [2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i < 10) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
//
//     i++;
// }
// перебрати його циклом for
//     for (let j = 0; j < 10; j++) {
//         console.log(j);
//         document.write(`<div>${j}</div>`);
//
//     }
    //перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
//     while (i< number.length){
//         if(i % 2 !==0){
//             console.log(i);
//             document.write(`<div>${ number [i]}</div>`);
//         }
//            i++;
//     }
    //перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 0; j < number.length; j++) {
//    if(j % 2 !== 0){
//        console.log(j);
//        document.write(`<div>${ number [j]}</div>`);
//
//    }
//
// }
// перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < number.length){
//     if ((number[i]%2)===0) {
//         console.log(number[i]);
//         document.write(`<div>${number[i]}</div>`);
//     }
//
//     i++;
// }
//перебрати циклом for та вивести  числа тільки парні  значення
// for (let j = 0; j < number.length; j++) {
//    if ((number[j] % 2 )===0){
//        console.log(number[j]);
//        document.write(`<div>${number[j]}</div>`);
//    }
//
// }
//замінити кожне число кратне 3 на слово "okten"
// for (let j = 0; j < number.length; j++) {
//     if ((number[j] % 3) === 0){
//         number[j] = 'okten';
//         console.log([j]);
//         document.write(`<div>${number[j]}</div>`);
//     }
//
// }
// вивести масив в зворотньому порядку.
// for (let j = number.length - 1; j >= 0; j--) {
//     console.log(number[j]);
//     document.write(`<div>${number[j]}</div>`);
//
// }
//перебрати його циклом while
// let j = number.length - 1;
// while (j >= 0){
//     console.log(number[j]);
//     document.write(`<div>${number[j]}</div>`);
//
//     j--;
// }
//перебрати циклом while та вивести  числа тільки з непарним індексом
let j = number.length - 1;
while (j>=0){
    if (j % 2 !==0){
        console.log(j);
        document.write(`<div>${number[j]}</div>`);
    }
    j--;
}
// перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = number.length - 1; i >= 0; i--) {
    if (i%2 !== 0 ){
        console.log(i);
        document.write(`<div>${number[i]}</div>`);
    }

}
// перебрати циклом while та вивести  числа тільки парні  значення
j = number.length -1;
while (j>=0){
    if ((number[j] % 2)===0){
        console.log(number[j]);
        document.write(`<div>${number[j]}</div>`);
    }

    j--;
}
//перебрати циклом for та вивести  числа тільки парні  значення
for (let i = number.length - 1; i >= 0; i--) {
  if ((number[i] % 2) === 0){
      console.log(number[i]);
      document.write(`<div>${number[i]}</div>`);
  }

}
//замінити кожне число кратне 3 на слово "okten"
for (let i = number.length - 1; i >= 0; i--) {
    if ((number[i] % 3)===0){
        number[i]= 'okten';
        console.log([i]);
        document.write(`<div>${number[i]}</div>`);
    }
}