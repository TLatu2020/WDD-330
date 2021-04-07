import Comments from './storage.js';

export const weatherByLocation = navigator.geolocation.getCurrentPosition(position => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=7cbff6ff955122bea5c143b87e2663a5&units=metric`;

    const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7cbff6ff955122bea5c143b87e2663a5&units=metric`;

    fetch(currentURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            let span = document.getElementsByClassName('icon');

            let icon = jsObject.weather[0].icon;

            let img = document.createElement('img');

            img.setAttribute('src', 'https://openweathermap.org/img/wn/' + icon + '@2x.png');

            document.querySelector('span.icon').appendChild(img);



            //Current Temp
            document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp) + " °C";

            //Highest Temp
            document.getElementById('high-temp').textContent = Math.round(jsObject.main.temp_max) + " °C";

            //Humidity Level
            document.getElementById('humidity').textContent = jsObject.main.humidity + " %";
        })

    fetch(forecastURL)
        .then((response) => response.json())
        .then((jsObject) => {

            const fiveDays = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'));

            const name = document.getElementById('location');

            name.innerHTML = `<h2 id="city">${jsObject.city.name}</h2>`;



            for (let i = 0; i < 1; i++) {
                fiveDays.forEach(forecast => {

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

                    temp.textContent = Math.round(forecast.main.temp) + " °C";

                    card.className = "days";

                    card.appendChild(weekDay);
                    card.appendChild(image);
                    card.appendChild(temp);






                    document.querySelector('div.forecast-cards').appendChild(card);
                })
            }
        })

});

export default class Reports {
    constructor() {
        this.comments = new Comments();

        console.log(this.comments);

        this.commentListener();

        this.showComment();
    }

    //load all comment
    showComment() {
        let listcomment = this.comments.readStorage();

        console.log(listcomment);

        if (listcomment.length > 0) {
            let commentList = document.querySelector('#commentLists');
            let ulCommentList = document.createElement('ul');

            commentList.textContent = "";
            let commenth2 = document.createElement('h3');
            commenth2.textContent = "Weather Report List";
            commentList.appendChild(commenth2);

            listcomment.forEach(comment => {
                let liList = document.createElement('li');
                const mydate = new Date(comment.date);
                liList.innerHTML = `<span class="commentContent">${comment.comment} - <span>
                
              <span class="commentDate">${mydate.getDate() + ' ' + mydate.toLocaleString('en-us', { month: "short" }) + ' ' + mydate.getFullYear()}</span>`;
                ulCommentList.appendChild(liList);
            });
            commentList.appendChild(ulCommentList)

        }

    }

    //create listener
    commentListener() {
        const addComment = document.querySelector('#addComment');


        addComment.addEventListener("click", event => {
            const content = document.querySelector('#newComment');

            if (content.value) {
                this.comments.addComment(content.value);
                content.value = "";
                this.showComment();

            } else {
                alert('add some Content');
            }
        });
    }
}