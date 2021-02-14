import Todos from './ToDos.js';

window.onload = function() {
    const ul = document.getElementById('list');
    let todo = new Todos('myTodo', ul);
    todo.init();
}

// const ul = document.getElementById('list');
// let todo = new Todos('myTodo', ul);
// todo.init();


WebFont.load({
    google: {
        families: [
            'Roboto Slab', 'Montserrat'
        ]
    }
});