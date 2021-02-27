const url = "https://swapi.dev/api/starships/";

fetch(url)
    .then(function(response) {
        return response.json()

    })
    .then(function(jsonObject) {
        console.log(jsonObject);

        const starship = jsonObject.results;

        console.log(starship);


        const ul = document.createElement('ul');

        starship.forEach(item => {

            const li = document.createElement('li');
            console.log(item);
            li.innerHTML = `
            <p> Name: ${item.name} </p>
            <p> Ship Length: ${item.length} </p>
            <p> Ship crew: ${item.crew} </p>
            `;

            console.log(li);

            ul.appendChild(li);



            document.querySelector('div.displayInfo').appendChild(ul);
        });



    })
    // .then
    // if (starship.next) {
    //             const next = document.getElementById('next');

//             next.onclick = () => {

//             }
//         }