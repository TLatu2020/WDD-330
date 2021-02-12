import * as storage from './ls.js';
import * as utes from './utilities.js';

let todoList = null;

export default class ToDos {
    constructor(elementId, key) {
        this.elementId = utes.selecting(elementId);

        this.key = key;

        utes.onEnter('#add', this.addTodo);


    }

    addTodo() {
        const task = document.getElementById('addTodo').value;

        saveToDo(task, 'myList');

        this.listTodos();


    }

    listTodos() {
        renderTodoList(getTodos('myList'), this.elementId);
    }

    completeTodo(todoID) {
        const index = todoList.findIndex(item => item.id === Number(todoID))
        console.log(todoID);
        todoList[index].completed = !todoList[index].completed;

        this.listTodos();

    }

    removeTodo() {

    }

    filterTodo() {


        utes.onEnter("")
    }

}

function saveToDo(task, key) {
    let date = new Date();


    let todoItem = { id: date.getTime(), content: task, completed: false };

    if (todoList == null) {
        todoList = [todoItem];
    } else {
        todoList.push(todoItem);
    }

    storage.writeStorage(key, todoList);

}

function getTodos(key) {
    if (todoList == null) {
        let items = storage.readStorage(key);

        todoList = items;


    }
}

function renderTodoList(list, element) {
    list = todoList;

    if (list != null) {

        list.forEach(item => {

            element = document.getElementById('list');
            let todo = document.createElement('li');

            todo.innerHTML = `
            <input id="${item.id}" type="checkbox" class="checkItem" />
            <p>${item.content}</p>
            <button class="deleteBtn">X</button>
            `;

            element.appendChild(todo);


        })
    }

    // if (list != null) {
    //     list.forEach(todo => {
    //         element.appendChild(renderTodo(todo));
    //     })
    // }
}

// function renderTodo(todo) {
//     const completed = todo.completed ? 'done' : '';
//     const items = document.createElement('li');

//     items.setAttribute('class', `todo-item ${completed}`);
//     items.setAttribute('data-key', todo.id);

//     if (completed == 'done') {
//         items.innerHTML = `
//             <input id="${todo.id}" type="checkbox" class="checked" checked>
//         `;
//     } else {
//         listItem.innerHTML = `
//             <input id=${todo.id}" type="checkbox" class="checked">
//         `;
//     };

//     items.innerHTML += `
//         <label for="${todo.id}" class="tickbox"></label>
//         <span>${todo.content}</span>
//         <button class="delete-button">X</button>
//     `;

//     return items;
// }