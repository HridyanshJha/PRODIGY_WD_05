const apiKey = "e015ccb7b53a8b8081c18130b29da057";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBTn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const getData = async (city) => {
  let promise = await fetch(url + city + `&appid=${apiKey}`);
 
  if (promise.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    let data = await promise.json();

    // console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'images/clear.png'
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'images/rain.png'
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png'
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'images/mist.png'
    } else if (data.weather[0].main == 'Snow') {
      weatherIcon.src = 'images/snow.png'
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }


}

searchBTn.addEventListener('click', () => {
  getData(searchBox.value);

})

