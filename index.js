`use strict`;

function generateList(array) {
    let ul = document.createElement('ul'); //создаем ul
    document.body.append(ul);

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li'); // создаем li
        li.innerHTML = arr[i]; // текст = значение индекса
        ul.append(li); // добавляем li в ul
        console.log(`1`)

        if (Array.isArray(arr[i])) { //попадаем во вложенный массив
            console.log(`2`);
            generateList(arr[i]);
        }
    }
}

let arr = [1, 2, [1.1, 1.2, 1.3], 3];
generateList(arr);
