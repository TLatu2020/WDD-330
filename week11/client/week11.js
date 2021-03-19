import Auth from './auth.js';

import { Errors, makeRequest } from './authHelpers';

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
// })

const myErrors = new Errors('errors');
const myAuth = new Auth(myErrors)

const loginForm = document.getElementById('login');
loginForm.querySelector('button').addEventListener('click', () => {
    myAuth.login(getPosts);
});

async function getPosts() {
    try {
        const data = await makeRequest('post', 'GET', null, myAuth.token);

        document.getElementById('content').classList.remove('hidden');
        console.log(data);
        let ul = document.getElementById('list');
        ul.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(data[i].title));
            ul.appendChild(li);
        }
        myErrors.clearError();
    } catch (error) {
        myErrors.handleError(error);
    }
}

document.getElementById('createSubmit').addEventListener('click', () => {
    createPost();
});

async function createPost() {
    const form = document.forms.postForm;
    console.dir(form);
    if (form.title.validity.valid && form.content.validity.valid) {
        myErrors.clearError();
        const data = {
            title: form.title.value,
            content: form.content.value
        };
        try {
            const res = await makeRequest('posts', 'POST', data, myAuth.token);
            form.title.value = '';
            form.content.value = '';
            getPosts();
        } catch (error) {
            myErrors.handleError(error);
        }
    } else {
        myErrors.displayError({ message: 'Title and Content are required' });
    }
}