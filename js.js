//Обозначаем место, куда будут складываться заголовки с текстом
parent = document.querySelector('.container');

//Создаем функцию, которая получает на вход объект поста и возвращает строку HTML-разметки
function createArticle(header, post) {
    const article = document.createElement('article');
    article.className = 'article';
    const articleHeader = document.createElement('h2');
    const articlePost = document.createElement('p');
    articleHeader.innerText = header;
    articlePost.innerText = post;

    article.append(articleHeader);
    article.append(articlePost);

    return article;
}

//Создаем функцию, которая добавляет полученную разметку в полученный контейнер
function innerArticle(article) {
    parent.append(article);
}

//Делаем GET запрос и добавляем их на страницу
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(article => {
            innerArticle(createArticle(article.title, article.body));
        });
    });