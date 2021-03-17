function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

class Weather {
    constructor(position = null) {
        this.position = position || {
            lat: 0,
            lon: 0
        };
    }
    async init() {
        if (this.position.lat === 0) {
            try {
                const positionFull = await getLocation();
                console.log(positionFull);

                this.position.lat = positionFull.coords.latitude;
                this.position.lon = positionFull.coords.longitude;
            } catch (error) {
                console.log(error);
            }
        }
    }
    async getWeatherByPosition() {

    }
}

class WeatherView {
    renderWeather() {

    }
}







// const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-34.2&lon=150.7833&appid=7cbff6ff955122bea5c143b87e2663a5&units=imperial";

// fetch(forecastURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         console.log(jsObject);

//         const fiveDays = jsObject.daily;

//         console.log(fiveDays);

//         for (i = 0; i < 1; i++) {
//             fiveDays.forEach(forecast => {
//                 console.log(forecast);

//                 let card = document.createElement('section');
//                 let weekDay = document.createElement('p');
//                 let image = document.createElement('img');
//                 let temp = document.createElement('p');

//                 var date = new Date(forecast.dt);
//                 var day = date.toString();
//                 day = day.slice(0, 3);
//                 weekDay.textContent = day;




//                 image.setAttribute('src', 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '@2x.png');
//                 image.setAttribute('alt', forecast.weather[0].description);

//                 temp.textContent = Math.round(forecast.temp.day) + " °F";

//                 card.className = "days";

//                 card.appendChild(weekDay);
//                 card.appendChild(image);
//                 card.appendChild(temp);



//                 document.querySelector('div.forecast-cards').appendChild(card);
//             })
//         }
//     })