//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.innerText = 'hello'
// div.classList.add('wrap','collapse','alpha','beta');
//  document.body.appendChild(div);
// div.style.background= 'blue'
// div.style.color = 'white'
// div.style.fontSize = '40px'
// div.style.width = '250px'
// let cloneNode = div.cloneNode(true);
// document.body.appendChild(cloneNode);
//Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let mas = ['Main','Products','About us','Contacts'];
for (const m of mas) {
    let li = document.createElement('li');
    li.innerText = m
    let menuList = document.getElementsByClassName('menu');
    menuList[0].appendChild(li);

}
//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
 ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const ArrayElement of coursesAndDurationArray) {
    let divElement = document.createElement("div");
    divElement.innerText = ArrayElement.title + " " + ArrayElement.monthDuration;
    document.body.appendChild(divElement);

}
//- Є масив
let courses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const cours of courses) {
    let divElement1 = document.createElement('div');
    divElement1.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = cours.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = cours.monthDuration;
    h1.appendChild(p);
    divElement1.appendChild(h1);
    document.body.appendChild(divElement1);




}