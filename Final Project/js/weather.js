export default class Weather {
    constructor() {
        const getLocation = navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=7cbff6ff955122bea5c143b87e2663a5&units=imperial`;

            fetch(forecastURL)
                .then((response) => response.json())
                .then((jsObject) => {
                    console.log(jsObject);

                    const fiveDays = jsObject.daily;

                    console.log(fiveDays.timezone);

                    const name = document.getElementById('location');

                    name.innerHTML = `<h2>${jsObject.timezone}</h2>`;

                    for (let i = 0; i < 1; i++) {
                        fiveDays.forEach(forecast => {
                            console.log(forecast);

                            let card = document.createElement('section');
                            let weekDay = document.createElement('p');
                            let image = document.createElement('img');
                            let temp = document.createElement('p');

                            var date = new Date(forecast.dt);
                            var day = date.toString();
                            day = day.slice(0, 3);
                            weekDay.textContent = day;




                            image.setAttribute('src', 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '@2x.png');
                            image.setAttribute('alt', forecast.weather[0].description);

                            temp.textContent = Math.round(forecast.temp.day) + " °F";

                            card.className = "days";

                            card.appendChild(weekDay);
                            card.appendChild(image);
                            card.appendChild(temp);



                            document.querySelector('div.forecast-cards').appendChild(card);
                        })
                    }
                })
        });

    }

}