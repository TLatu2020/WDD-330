import * as storage from './ls.js';
import * as utes from './utilities.js';

let todoList = null;

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

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

    completeTodo(list) {

    }

    removeTodo(list) {

    }



    filterTodo() {

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

    list.forEach(item => {

        const LINE = LINE_THROUGH;
        const complete = item.completed ? true : false;

        element = document.getElementById('list');
        let todo = document.createElement('li');

        if (complete == true) {
            todo.innerHTML = `
            <input id="${item.id}" type="checkbox" class="checks" checked>
            <p class="${LINE}">${item.content}</p>
            <button class="deleteBtn">X</button>
            `;

            element.appendChild(todo);
        } else if (complete == false) {
            todo.innerHTML = `
            <input id="${item.id}" type="checkbox" class="checks"/>
            <p>${item.content}</p>
            <button class="deleteBtn">X</button>`;

            element.appendChild(todo);
        }
    })


}