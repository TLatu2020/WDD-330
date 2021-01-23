//Event Listeners Example
/*function doSomething() {
    console.log('Something Happened!');
}

*/

//The Event Object Example

/*function doSomething(event) {
    console.log(event.type);
}*/

//Event Target
/*function doSomething(event) {
    console.log(event.target);
}*/

//Coordinate of an Event
// function doSomething(event) {
//     console.log(`screen: (${event.screenX}, ${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
// }

// addEventListener('click', doSomething);


ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');


//BUBBLING EXAMPLE
// ulElement.addEventListener('click', (event) => console.log('Clicked on ul'));

// liElement.addEventListener('click', (event) => console.log('Clicked on li'));


//CAPTURING EXAMPLE
ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), true);

liElement.addEventListener('click', (event) => console.log('Clicked on li'), true);

//capturing
ulElement.addEventListener('click', (event) =>
    console.log('Clicked on ul'), true);
liElement.addEventListener('click', (event) =>
    console.log('Clicked on li'), true);
// bubbling
ulElement.addEventListener('click', (event) =>
    console.log('Clicked on ul'), false);
liElement.addEventListener('click', (event) =>
    console.log('Clicked on li'), false);