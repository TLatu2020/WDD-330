import { weatherByLocation } from './weather.js';
import Reports from './weather.js';
// import Comments from './storage.js';

const myWeatherController = weatherByLocation;

myWeatherController;

const weatherReports = new Reports();

// const weatherReports = new Comments();

weatherReports;


WebFont.load({
    google: {
        families: ['Roboto Slab', 'Montserrat']
    }
});