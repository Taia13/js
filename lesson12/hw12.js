// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         let div = document.createElement('div');
//         div.classList.add('main');
//         for (const post of posts) {
//             let div1 = document.createElement('div1');
//             div1.classList.add('post')
//             div1.innerHTML = `
//  <p> id => ${post.id} </p>
// <p1> title => ${post.title}</p1>
// <p2> body => ${post.body}</p2>`
//
//             div.appendChild(div1);
//             document.body.appendChild(div);
//
//
//         }
//     })
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments =>{
        let div = document.createElement('div');
        div.classList.add('main');
        for (const comment of comments) {
            let div1 = document.createElement('div1');
            div1.classList.add('comment');
            div1.innerHTML =
                `<p> id => ${comment.id}</p>
                <p1> name => ${comment.name}</p1>
                <p2> email => ${comment.email}</p2>
                <p3> body => ${comment.body}</p3>`



            div.appendChild(div1);
            document.body.appendChild(div);

        }


    })