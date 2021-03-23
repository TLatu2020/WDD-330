import { getLocation } from './utilities.js';
import Weather from './weather.js';
import WeatherView from './weatherView.js';


export default class WeatherControl {
    constructor(position = null) {
        this.position = position || {
            lat: 0,
            lon: 0
        };

        this.weather = new Weather();

        console.log(this.weather);

        this.weatherView = new WeatherView();


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

    // async getWeathersByPosition(position = this.position) {
    //     const weatherList = await this.weather.getWeatherByPosition(position);
    //     console.log(weatherList);
    //     this.weatherView.renderWeather(weatherList);
    // }
}