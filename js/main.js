// ! DOM --- DOCUMENT OBJECT MODEL - Объектное модулирование документа
// ! он нужен для диномеческого изменения нашей страницы
// console.log(typeof document.getElementById('title'));
// ? getElementById-получить элемент по idишке(возрати мне один элемент с айдишкой, так айлишкой уникальный элемент)
// let title = document.getElementById('title');
// let list = document.getElementsByTagName('ul');
// let items = document.getElementsByClassName('item');
// let inp = document.getElementsByName('inp-name')
// console.log(inp);

//  ! 2 спосаб что бы связать наши теги с определенными переменными  в js, и таким оброзом мы получаем доступ к элментам к html документа
// let title = document.querySelector('#title')
// let list = document.querySelectorAll('ul')
// ? querySelectorAll- ищи нам глобально
// let items = document.querySelectorAll('.item')
// let inp = document.querySelectorAll('[name="inp-name"]')
// console.log(inp);

// ! NodeList -список узлов
// let items = document.getElementsByClassName('item');    // ? HTML Collection - она динамическая (постоянно меняется), видит обсолютно все изменения и обновляется а NodeList нет
// let items2 = document.querySelectorAll('.item');    // ? NodeList - он статический, запоминает данные при их создании
// ? попробуем динамически добавить эллай тег в тег юэл, у нас сейчас есть 3 элемента маркировонного списка и мы ходим динамически добавить еще 4 эдемент
// let list = document.getElementsByTagName('ul');  // ? HTMLCollection
// list[0].innerHTML += '<li class="item">New elem</li>'  // ? = мы просто перезаписали содержимое innerHTML (удалили) // += прибавляет  
// console.log(list);
// ? innerHTML -он отвечает за его содержимое, содержимое его тега
// console.log(items);
// console.log(items2);
// for(let i = 0; i < items.length; i++){   
//     console.log(items[i]);
// }
// ? нечего не поменяется, циклом спокойно можно  прохится по HTML Collection так и по NodeList
// for(let i = 0; i < items2.length; i++){   
//     console.log(items2[i]);
// }

// !
// let example = document.getElementById('hello')
// console.log(example.innerHTML);
// ? innerText - содержит в себя содержимое нашего элемента а именно текс // Bootcamp
// ? innerHTML - содержит в себе содержимое элемента которую мы вытащили 
// example.innerText = 'New Data';
// console.log(example.innerHTML);

// let h2s= document.querySelectorAll('h2');   // ? почему NodeList потому что мы использовали querySelectorAll
// let h2s = document.getElementsByTagName('h2') // ? Для HTML Collection- мы не можем принимать методы массива, можно примать циклы
// console.log(h2s);
// console.log(h2s);
// h2s.forEach(item =>{
//     // console.log(item);
//     item.innerText = 'Hello World'
// })

// ? это пример как можно менять свойство элементов, которыу мы связывем с определенной переменной и которая содержит какойто тег,элемент HTML ДОКУМЕНТА 
// let items = document.querySelectorAll('.item');  // ? NodeList
// console.log(items);
// items.forEach((item, index) => {
    // item.innerHTML = `${item.innerHTML} ${index +1}`  // ? вот так можно менять внутренние свойство,содержимое каких либо определенных элементов
    // item.style.color = 'red'
    // item.style.backgroundColor = 'green'  
//     if(index % 2 !== 0){
//         item.style.backgroundColor = 'pink'
//     }
// })

// ! Методы js для взаимодействие c html элементами
// ? создание элемента
// let newElem = document.createElement('div');
// newElem.innerHTML = '<span>I am a new element</span>';  // ? создали элемент


// ? добавление элемента
// let container = document.querySelectorAll('.container');
// console.log(container);
// container[0].appendChild(newElem);  // ? appendChild,append - добавление
// newElem.style.color = 'brown';  // ? меняем СТИЛЗАЦИЮ
// newElem.style.fontSize = '25px'


// let container = document.querySelectorAll('.container');
// let elem1 = document.createElement('div');
// let elem2 = document.createElement('div');
// let elem3 = document.createElement('div');

// elem1.innerText = 'Element 1';
// elem2.innerText = 'Element 2';
// elem3.innerText = 'Element 3';

// container[0].append(elem1);  // ? push - он принимает как дом элементы, так ис троки.Позволяет вставить несколько значений, нечего не возвращяет
// container[0].prepend(elem2);  // ? unshift
// container[0].appendChild(elem3)  // ? добавил в конец, он проинимает только дом элемента(узел). Позволяет вставить только 1 значение, он возвращяет добавленный элемент

// ? удаление элемента
// container[0].removeChild(elem1);

// ? добавлять и удалть классы  // add- добавляет класс
// elem1.classList.add('foo');
// elem1.classList.remove('foo');  // ? удаляет класс
// elem1.classList.toggle('foo'); // ? если у нас нету класса то он добавляет а если там есть класс то он удаляет

// ! Динамечески будем изменять фон нашей страницы
// let date = new Date().getHours();
// // console.log(date);
// if(date > 21) {
//     document.body.classList.add('theme-dark')
// }else{
//    document.body.classList.add('theme-light') 
// }


// let res = prompt('Enter your name:');
// let title = document.getElementById('title');
// title.innerText = `${title.innerText}, ${res}`

// title.innerHTML = '<span>Kani</span>' // ? видет теги 
// title.innerText = '<span>Kani</span>' // ? не видит теги


// ! DOM - DOCUMENT OBJECT MODEL
// ? селекторы
// let btn = document.getElementById('btn');
// console.log(typeof btn);

// let blocks = document.getElementsByClassName('blocks')
// console.log(blocks);
// ?  запись такая же будет 
// let blocks = document.getElementsByTagName('div');
// console.log(blocks);

// let inp = document.getElementsByName('phone');
// console.log(inp);

// ! селектор querySelectors 
// let btn = document.querySelector('#btn');
// let blocks = document.querySelectorAll('.blocks');
// let blocks2 = document.querySelectorAll('div');
// let inp = document.querySelectorAll('[name= "phone"]');
// console.log(btn, blocks, blocks2, inp);

// let container = document.getElementById('container');
// console.log(container);
// container.innerText = '<h1>Hello Dom!</h1>'
// container.innerHTML = '<h1>Hello Dom!</h1>'
// container.style.backgroundColor = 'red'
// container.style.color = 'white'
// // container.style.fontSize = '15px'
// console.log(document.body);
// document.body.style.backgroundColor = 'black'


// let container = document.getElementById('container');
// container.style.display = 'flex'
// container.style.flexWrap = 'wrap'
// for(let i = 0; i < 10; i++){
//     let block = document.createElement('div')
//     block.style.width = '100px'
//     block.style.height = '100px'
//     block.style.backgroundColor = 'green'
//     block.style.margin = '10px'
//     container.append(block)
// }

// container.innerHTML = '<h1>Hello Dom</h1>'
// container.innerHTML = '<h1>Hello Dom2</h1>'
// console.log(container.firstChild, container.lastChild);
// console.log(container.firstChild);
// console.log(container.lastChild.parentElement);
// console.log(container.firstChild.nextElementSiblingLing);
// console.log(getComputedStyle(container).color);

// ! NodeList -static - одинираз оброщяется к элементам и больше не следит за ними 
// let blocks1 = document.querySelectorAll('.blocks')   // ? тут точка  NodeList

 // ! HTMLCollection - dinamic - постоянно следит за элементами и видит изменения
// let blocks2 = document.getElementsByClassName('blocks')  // ? тут нету точки  HTMLCollection

// blocks1[1].remove()
// console.log(blocks1);
// console.log(blocks2);

// let inp = document.getElementById('inp')
// // console.log(inp);
// inp.setAttribute('placeholder', 'search...')
// inp.classList.add('new-class')
// inp.classList.add('new-class-2')  // ? htnl
// inp.classList.remove('new-class')
// inp.classList.toggle('new-class-3')



