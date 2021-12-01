//1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let changeText = document.getElementById('main_header');
changeText.innerText= 'sep-2021';
// робить шириниу елементу ul 400px
let wUl = document.getElementsByTagName('ul');
//wUl.style.width = '400px';
//робить шириниу всіх елементів з класом linkList шириною 50%
let allElementClassLinklist = document.getElementsByClassName('linkList');
for (const allElementClassLinklistElement of allElementClassLinklist) {
    allElementClassLinklistElement.style.width = '50%';
}
//отримує текст який зберігається в елементі з класом listElement2
let addText = (text)=>{
    let elementsByClassName = document.getElementsByClassName('listElement2');
    elementsByClassName.innerText = 'text';
}
//отримує всі елементи li та змінює ім колір фону на сірий
let changeColorLi = (li) => {
    let liColor = document.getElementsByTagName('li');
    for (const liColorElement of liColor) {
liColorElement.style.background = 'gray';
    }
}
//отримує всі елементи 'a' та додає їм клас anchor
let aList = document.getElementsByTagName('a');
for (const a of aList) {
    a.classList.add('anchor');
}

// отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aList1 = document.getElementsByTagName('a');
for (const a of aList1) {
    if (a.innerText === 'link3'){
        a.style.fontSize = '40px'
    }
}
//отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aList2 = document.getElementsByTagName('a');
for (const a of aList2) {
    let newClass = a.innerText;
    a.classList.add(a.innerText);

}
//отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let headerList = document.getElementsByClassName('sub-header');
for (const item of headerList) {
    item.style.background = prompt('Color?' );
}
//отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
document.getElementsByClassName('sub-header');
for (const headerListElement of headerList) {
    if (headerListElement.innerText === 'content 2 segment'){
        headerListElement.style.color = prompt('color?');
    }

}
//отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let elContent = document.getElementsByClassName('content_1');
elContent.innerText =  prompt('text?');
// отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p');
for (const pListElement of pList) {
    pListElement.style.padding = '20px';

}
//отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elText2 = document.getElementsByClassName('text2');
for (const text2 of elText2) {
    text2.innerText = 'sep-2021'
}