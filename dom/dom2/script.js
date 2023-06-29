const card = document.querySelector('.card');

// console.log(card);
// console.log('innerHTML', card.innerHTML);
// console.log('outerHTML', card.outerHTML);


// textContent - включая скрытые элементы
// console.log('textContent', card.textContent);

// innerText - только видимых
// console.log('innerText', card.innerText);

// card.textContent = 'New text from JS';

card.innerHTML = '<h2>Header from JS</h2>';


// createElement - создать элемент
const newDiv = document.createElement('div');

newDiv.textContent = 'Text for new div from JS';

// function createElem(content, type) {
//     const newElem = document.createElement(type);
//     newElem.textContent = content;
//     return newElem;
// }


// card.append(newDiv);
// card.prepend(newDiv);

// card.before(createElem('Text from function', 'div'));
// card.after(newDiv);

// заменяет
// card.replaceWith(newDiv);


// вставляет элемент
// card.insertAdjacentElement('afterbegin', newDiv);


// разбивает по тегам
// card.insertAdjacentHTML('beforeend', '<p>adjacent afterbegin</p>');
// card.insertAdjacentHTML('afterend', '<p>adjacent afterend</p>');

// вставляет как текст
// card.insertAdjacentText('beforebegin', '<p>adjacent beforebegin</p>');
// card.insertAdjacentText('beforeend', '<p>adjacent beforeend</p>');


// const liveLis = document.getElementsByClassName('list_item');
// const deadLis = document.querySelectorAll('.list_item');

// document.getElementsByClassName('list_item')[2].remove();

// console.log(liveLis);
// console.log(deadLis);
// console.log(deadLis[2].textContent);

// function show() {
//     const currentCollection = document.querySelectorAll('.list_item');
//     console.log(currentCollection);
//     console.log(currentCollection[2].textContent);
// }

// show();


// проверить наличие hasAttribute => true или false 
// console.log(card.hasAttribute('id'));
// console.log(card.hasAttribute('class'));

// получить значение
// console.log(card.getAttribute('class'));

// добавить аттр со значение
// card.setAttribute('name', 'from_JS');

// удалить
// card.removeAttribute('name');


// получить список аттр.
// console.log(card.attributes);


// card.className = 'active';

// добавить
// card.classList.add('active');
// card.classList.add('new');
// card.classList.add('test');

// удалить
// card.classList.remove('test');

// если класса нет - добавит, если класс есть - удалит
// card.classList.toggle('test2');
// card.classList.toggle('test2');
// card.classList.toggle('test2');

// console.log(card.classList);

// проверка на наличие класса => true или false
// console.log(card.classList.contains('new'));
// console.log(card.classList.contains('test'));


// card.style.fontSize = '40px';

const btn = document.querySelector('.btn');

// btn.onclick = function () {
//     btn.classList.toggle('test');
//     console.log('CLICK HAPPEND');
// };

// btn.onclick = function () {
//     console.log('ANOTHER CLICK HAPPEND');
// };

// btn.ondblclick = function () {
//     console.log('DBLCLICK HAPPEND');
// };

// btn.onmousemove = function () {
//     console.log('MOUSE MOVE HAPPEND');
// };

// btn.onmouseenter = function () {
//     console.log('MOUSE ENTER HAPPEND');
// };

// btn.onmouseleave = function () {
//     console.log('MOUSE LEAVE HAPPEND');
// };


function clickHandler(event) {
    btn.classList.toggle('test');
    // console.log('CLICK HAPPEND');
    console.log(event.target.innerText);
}

// function secondClickHandler () {
//     console.log('ANOTHER CLICK HAPPEND');
// }

// btn.addEventListener('click', clickHandler);

// btn.addEventListener('click', function () {
//     console.log('test')
// });
// btn.removeEventListener('click', function () {
//     console.log('test')
// });

// btn.removeEventListener('click', clickHandler);


// document.body.addEventListener('keydown', (event) => {
//     console.log(event.code);
//     console.log(event.key);
//     console.log(event.keyCode);
// });


// document.body.addEventListener('wheel', (event) => {
//     console.log(event);
// });


// const input = document.querySelector('.inp');

// input.onchange = function () {
//     this.textContent = this.value;
//     console.log(this.textContent);
// };



// Задача: 1 способ
document.body.innerHTML = `
<form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя">
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль">
        </label>
        <button type="submit">
            Подтвердить
        </button>
</form>
`;