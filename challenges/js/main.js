import Todos from './Todos.js';

// window.onload = function() {
//     const ul = document.getElementById('list');
//     let todo = new Todos('myTodo', ul);
//     todo.init();
// }

const ul = document.getElementById('list');
let todo = new Todos('myTodo', ul);
todo.init();
// import ToDos from './ToDos.js';

// const toDo = new ToDos("#list", "myList");

// toDo.listTodos();

WebFont.load({
    google: {
        families: [
            'Roboto Slab', 'Montserrat'
        ]
    }
});