import { writeToLS, readFromLS } from './ls.js';
import { qs, setCallbacks, onEnter } from './utilities.js';

let todoList = null;

export default class Todos {
    constructor(key, element) {
        this.todoList = getTodos(key);
        this.key = key;
        this.element = element;
        this.listTodos();
    }

    addTodo() {
        const input = qs('.new')
        saveTodo(input.value, this.key);
        input.value = '';
        this.todoList = getTodos(this.key);
        this.listTodos();
    }

    completeTodo(event) {
        const id = event.target.dataset.id
        this.todoList[id].completed = !this.todoList[id].completed;
        saveTodos(this.key, this.todoList);
        this.listTodos();
    }

    removeTodo(event) {
        const id = event.target.dataset.id
        this.todoList.splice(id, 1);
        saveTodos(this.key, this.todoList);
        this.listTodos();
    }

    listTodos() {
        renderTodoList(this.todoList, this.element);
        updateCounter(this.remains);
        this.setCallbacks();
    }

    filterTodos(event) {
        const id = event.target.dataset.id
        this.todoList.forEach(item => {
            if (id === 'active' && item.completed) {
                item.hide = true
            } else if (id === 'completed' && !item.completed) {
                item.hide = true;
            } else {
                item.hide = false;
            }
        });
        const listElement = qs('.footer-list');
        listElement.className = 'footer-list ' + id;

        this.listTodos();

    }

    setCallbacks() {

        setCallbacks('.checkbox', this.completeTodo.bind(this));

        setCallbacks('.remove', this.removeTodo.bind(this));
    }

    init() {
        onEnter('.add', this.addTodo.bind(this));
        onEnter('.all', this.filterTodos.bind(this));
        onEnter('.active', this.filterTodos.bind(this));
        onEnter('.completed', this.filterTodos.bind(this));
    }

    get remains() {
        return this.todoList.filter(item => !item.completed).length;
    }
}


function saveTodo(task, key) {
    if (!task) return;
    const todo = { id: new Date(), content: task, completed: false }
    todoList.push(todo);
    writeToLS(key, todoList);
}


function saveTodos(key, todoList) {
    if (key && todoList) {
        writeToLS(key, todoList);
    }
}


function getTodos(key) {
    todoList = readFromLS(key);
    return todoList;
}


function renderTodoList(list, element) {
    element.innerHTML = '';
    list.forEach((item, indx) => {

        if (!item.hide) {
            const todo = document.createElement('li');
            const complete = item.completed ? true : false;
            const LINE = "lineThrough";
            if (complete == true) {
                todo.innerHTML = ` <input class="${item.completed ? "checkbox done" : 'checkbox'}" id="checkbox-${indx}" data-id=${indx} type="checkbox" checked>
                <div class="${item.completed ? "detail done" : " "} ${LINE}" >${item.content}</div>
                <button class="remove" id="remove-${indx}" data-id=${indx}>X</button>`;
                element.appendChild(todo);
            } else {
                todo.innerHTML = ` <input class="${item.completed ? "checkbox done" : 'checkbox'}" id="checkbox-${indx}" data-id=${indx} type="checkbox">
                <div>${item.content}</div>
                <button class="remove" id="remove-${indx}" data-id=${indx}>X</button>`;
                element.appendChild(todo);
            }

        }
    });
}


function updateCounter(counter) {
    const elem = qs('.left');
    elem.innerHTML = `${counter} task left`;
}