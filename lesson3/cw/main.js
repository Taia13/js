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
let i = 0;
    while (i< number.length){
        if(i % 2 !==0){
            console.log(i);
            document.write(`<div>${ number [i]}</div>`);
        }
           i++;
    }
    //перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < number.length; j++) {
   if(j % 2 !== 0){
       console.log(j);
       document.write(`<div>${ number [j]}</div>`);

   }

}
// перебрати циклом while та вивести  числа тільки парні  значення
