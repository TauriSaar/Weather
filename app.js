document.addEventListener('DOMContentLoaded', cityweather)
function weatherDataFetch(city) {
    var key = 'YourAPIKey';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) // Convert data to json
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
}
function cityweather(e) {
    weatherDataFetch('Tallinn');
}

function drawWeather(data) {
    var celcius = Math.round(parseFloat(data.main.temp) -273.15);
    var description = data.weather[0].description;

    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celcius + '&deg;';
    document.querySelector('#location').innerHTML = data.name;
}
