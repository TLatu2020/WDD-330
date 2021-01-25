const formed = document.forms.search;
//Below was the original but needed to change it for the lower part, search function, to work.
//const form = document.forms.search;

const input = formed.elements.searchInput;
/*
    This has the same result as the one above. It must be good practise to be precise when focusing on something specific.
        const input = form.searchInput;
*/


//This is using the third method of Events.
//input.addEventListener('focus', () => alert('focused'), false);
/*
    This is using the opposite. Nothing really changed from what I could see. It must need to have something else to see the difference.
        input.addEventListener('focus', () => alert('focused'), true);
*/

//This works the opposite as focused. So this works when the cursor is taken away from the input.
//input.addEventListener('blur', () => alert('blurred'), false);

//Alerts when cursor is moved when value is changed in input.
//input.addEventListener('change', () => alert('changed'), false);

//Submit

const form = document.forms['search'];

form.addEventListener('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

input.value = "Search Here";

//This is a long version of placeholder.
input.addEventListener('focus', function() {
    if (input.value === 'Search Here') {
        input.value = '';
    }
}, false);

input.addEventListener('blur', function() {
    if (input.value === '') {
        input.value = 'Search Here';
    }
}, false);



//Form validation through JavaScript example. This particular example shows when preventDefault() would be best used.
/*
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
*/