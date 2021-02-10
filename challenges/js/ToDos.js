import * as storage from './ls.js';
import * as utes from './utilities.js';

let todoList = null;

export default class ToDos {
    constructor(elementId, key) {
        this.elementId = utilities.selecting(elementId);

        this.key = key;

        utilities.onEnter('#add', this.addTodo);
    }

    addTodo() {
        const task = document.getElementById('new-item').value;

        saveToDo(task, 'myList');

        this.listTodos();
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