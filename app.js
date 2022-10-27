document.addEventListener('DOMContentLoaded', cityweather)
 function weatherDataFetch(city) {
   var key = '0c3dbc7c9707de0a34bae0310dd79aa5';
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
   .then(function(resp) {
   return resp.json()
   }) // Convert data to json
    .then(function(data) {
     console.log(data);
   })
    .catch(function() {
     // catch any errors
   });
}
function cityweather(e) {
    weatherDataFetch('Tallinn');
}

