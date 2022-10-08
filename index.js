`use strict`;

function generateList(array) {
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        if (Array.isArray(array[i])) {
            li.append(generateList(array[i]));
        } else {
            li.append(array[i]);
        }
        ul.append(li);
    }
    return ul;
}

let arr = [1, 2, [1.1, 1.2, 1.3], 3];
const ulElem = generateList(arr);
document.body.append(ulElem);
