import { writeToLS, readFromLS } from './ls.js';
import { qs, setCallbacks, onTouch } from './utilities.js';

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

    filterTodos() {
        const id = event.target.dataset.id
        this.todoList.forEach(ele => {
            if (id === 'active' && ele.completed) {
                ele.hide = true
            } else if (id === 'completed' && !ele.completed) {
                ele.hide = true;
            } else {
                ele.hide = false;
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
        onTouch('.add', this.addTodo.bind(this));
        onTouch('.all', this.filterTodos.bind(this));
        onTouch('.active', this.filterTodos.bind(this));
        onTouch('.completed', this.filterTodos.bind(this));
    }

    get remains() {
        return this.todoList.filter(ele => !ele.completed).length;
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
    list.forEach((ele, indx) => {
        if (!ele.hide) {
            const li = document.createElement('li');
            li.id = indx;
            li.innerHTML = ` <input class="${ele.completed ? "checkbox done" : 'checkbox'}" id="checkbox-${indx}" data-id=${indx} type="checkbox">
                <div class="${ele.completed ? "detail done" : 'detail'}" >${ele.content}</div>
                <button class="remove" id="remove-${indx}" data-id=${indx}>X</button>`;
            element.appendChild(li);
        }
    });
}


function updateCounter(counter) {
    const elem = qs('.left');
    elem.innerHTML = `${counter} task left`;
}



// import * as storage from './ls.js';
// import * as utes from './utilities.js';

// let todoList = null;

// const LINE_THROUGH = "lineThrough";

// export default class ToDos {
//     constructor(elementId, key) {
//         this.elementId = utes.selecting(elementId);

//         this.key = key;

//         utes.onEnter('#add', this.addTodo);

//     }

//     addTodo() {

//         const task = document.getElementById('addTodo').value;

//         if (task != "") {
//             saveToDo(task, 'myList');
//         }

//         this.listTodos();
//     }

//     listTodos() {
//         renderTodoList(getTodos('myList'), this.elementId);
//     }

//     completeTodos() {}

//     removeTodos() {}

//     filterTodos() {}

// }

// function saveToDo(task, key) {
//     let date = new Date();


//     let todoItem = { id: date.getTime(), content: task, completed: false };

//     if (todoList == null) {
//         todoList = [todoItem];
//     } else {
//         todoList.push(todoItem);
//     }

//     storage.writeStorage(key, todoList);

// }

// function getTodos(key) {
//     if (todoList == null) {
//         let items = storage.readStorage(key);

//         todoList = items;
//     }
// }


// function renderTodoList(list, element) {

//     if (list != null) {
//         list.forEach(item => {

//             const LINE = LINE_THROUGH;
//             const complete = item.completed ? true : false;

//             element = document.getElementById('list');
//             let todo = document.createElement('li');

//             todo.innerHTML = `<p>${item.content}</p>`;

//             element.appendChild(todo);

//             // if (complete == true) {
//             //     todo.innerHTML = `
//             //  <input id="${item.id}" type="checkbox" class="checks" checked>
//             //  <p class="${LINE}">${item.content}</p>
//             //  <input type="button" name="deleteBtn" id="delete" value="X">
//             //  `;

//             //     element.appendChild(todo);
//             // } else if (complete == false) {
//             //     todo.innerHTML = `
//             //  <input id="${item.id}" type="checkbox" class="checks"/>
//             //  <p>${item.content}</p>
//             //  <input type="button" name="deleteBtn" id="delete" value="X">`;

//             //     element.appendChild(todo);
//             // }
//         })
//     }

// }