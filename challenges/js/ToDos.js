import * as storage from './ls.js';
import * as utes from './utilities.js';

let todoList = null;

export default class ToDos {
    constructor(elementId, key) {
        this.elementId = utilities.selecting(elementId);

        this.key = key;

        utes.onEnter('#add', this.addTodo);
    }

    addTodo() {
        const task = document.getElementById('addTodo').value;

        saveToDo(task, 'myList');

        this.listTodos();
    }

    listTodo() {
        renderTodoList(getTodos("myList"), this.elementId);
    }

    completeTodo() {

    }

    removeTodo() {

    }

    filterTodo() {

    }

}

function saveToDo(task, key) {

    let todoItem = { content: task, completed: false };

    if (todoList == null) {
        todoList = [todoItem];
    } else {
        todoList.push(todoItem);
    }

    storage.writeStorage(key, list);
}

function getTodos(key) {
    if (todoList == null) {
        let items = storage.readStorage(key);

        todoList = items;
    }
}

function renderTodoList(list, element) {

}