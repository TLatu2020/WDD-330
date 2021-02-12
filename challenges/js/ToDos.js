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

    completeTodo(list) {
        list = todoList;


        console.log(list);
    }

    removeTodo(todoID) {
        const index = todoList.findIndex(item => item.id === Number(todoID));
        todoList.splice(index, 1);
        storage.writeStorage(this.key, todoList);
        this.listTodos();
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

    if (list != null) {

        list.forEach(item => {

            element = document.getElementById('list');
            let todo = document.createElement('li');

            todo.innerHTML = `
            <i class="fa fa-circle-thin co" id="${item.id}"></i>
            <p>${item.content}</p>
            <i class="fa fa-trash-o de"></i>
            `;

            element.appendChild(todo);


        })
    }
}