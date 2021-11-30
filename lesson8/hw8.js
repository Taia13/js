//Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"
//замініть текст параграфа з id 'content' на будь-який інший
let pContent = document.getElementById('content');
pContent.innerText = 'hello octen'
//замініть текст параграфа з id 'rules' на будь-який інший
let pRules = document.getElementById('rules');
pRules.innerText = 'hello world'
//змініть кожному елементу колір фону на червоний//змініть кожному елементу колір тексту на синій
let allP = document.body.children;
for (const allPElement of allP) {
    allPElement.style.background = 'red';
    allPElement.style.background = 'blue';
}
//отримати весь список класів елемента з id=rules і вивести їх в console.log
let allList = document.getElementById('rules');
console.log(allList.classList);
//поміняти колір тексту у всіх елементів fc_rules на червоний
let allClass = document.getElementsByClassName('fc_rules');
for (const allClass1 of allClass) {
    allClass1.style.color = 'red';

}