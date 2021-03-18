export default class WeatherView {
    renderWeather(weatherList) {
        weatherList.forEach(element => {
            let card = document.createElement('section');
            let weekDay = document.createElement('p');
            let image = document.createElement('img');
            let temp = document.createElement('p');

            var date = new Date(element.dt);
            var day = date.toString();
            day = day.slice(0, 3);
            weekDay.textContent = day;




            image.setAttribute('src', 'https://openweathermap.org/img/wn/' + element.weather[0].icon + '@2x.png');
            image.setAttribute('alt', element.weather[0].description);

            temp.textContent = Math.round(element.temp.day) + " °F";

            card.className = "days";

            card.appendChild(weekDay);
            card.appendChild(image);
            card.appendChild(temp);



            document.querySelector('div.forecast-cards').appendChild(card);
        })
    }
}