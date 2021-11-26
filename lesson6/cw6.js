// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// let a = n1.split('..').join(' ')
// console.log(a);
// let b = n2.split('---').join(' ')
// console.log(b);
// let c = n3.split('__').join(' ')
// console.log(c);
//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let f = (length, num) =>{
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random()*num))
    }
    // return  arr.sort((a,b)=> b -a)

    // return  arr.filter((value) => {
    //     if(value % 2 === 0) return value
    // }).sort((a,b) => b-a)}

   return arr.map(item => {
   }
})
console.log(f(10,100));
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.