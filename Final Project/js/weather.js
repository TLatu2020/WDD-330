export const getLocation = navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=7cbff6ff955122bea5c143b87e2663a5&units=metric`;

    fetch(forecastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);


            const fiveDays = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'));

            const name = document.getElementById('location');

            name.innerHTML = `<h2>${jsObject.city.name}</h2>`;



            for (let i = 0; i < 1; i++) {
                fiveDays.forEach(forecast => {
                    // console.log(forecast);

                    let card = document.createElement('section');
                    let weekDay = document.createElement('p');
                    let image = document.createElement('img');
                    let temp = document.createElement('p');

                    var date = new Date(forecast.dt_txt);

                    var day = date.toString();
                    day = day.slice(0, 3);
                    weekDay.textContent = day;




                    image.setAttribute('src', 'https://openweathermap.org/img/wn/' + forecast.weather[0].icon + '@2x.png');
                    image.setAttribute('alt', forecast.weather[0].description);

                    temp.textContent = Math.round(forecast.main.temp) + " °F";

                    card.className = "days";

                    card.appendChild(weekDay);
                    card.appendChild(image);
                    card.appendChild(temp);



                    document.querySelector('div.forecast-cards').appendChild(card);
                })
            }
        })
});