//This is to get the data
function getJSON(url) {
    return fetch(url)
        .then(function(response) {

            return response.json();
        })
}

function getShips(url) {
    return getJSON(url);
}


function renderShipList(ships, shipListElement) {

    console.log(ships);

    const list = shipListElement.children[1];
    list.innerHTML = "";

    ships.forEach(function(ship) {

        let listItem = document.createElement("tr");
        listItem.innerHTML = `
          <td><a href="${ship.url}">${ship.name}</a></td>
          <td>${ship.length}</td>
          <td>${ship.crew}</td>
          `;

        listItem.addEventListener("click", function(event) {

            event.preventDefault();
            getShipDetails(ship.url);
        });

        list.appendChild(listItem);
    });
}

function renderShipDetails(shipData) {
    console.log(shipData);
}

function showShips(url = "https://swapi.dev/api/starships/") {
    getShips(url).then(function(data) {
        console.log(data);
        const results = data.results;

        console.log(results);


        const shipListElement = document.getElementById("shiplist");
        renderShipList(results, shipListElement);


        if (data.next) {
            const next = document.getElementById("next");

            next.onclick = () => {

                showShips(data.next);
            };
        }
        if (data.previous) {
            const prev = document.getElementById("prev");

            prev.onclick = () => {
                showShips(data.previous);
            };
        }
    });
}

function getShipDetails(url) {
    getShips(url).then(function(data) {
        renderShipDetails(data);

    });
}
showShips();