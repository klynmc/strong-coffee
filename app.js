var button = document.querySelector('.submitBtn')
var inputVal = document.querySelector('.inputVal')
var cityName = document.querySelector('.cityName')
var temp = document.querySelector('.temp')
var description = document.querySelector('.description')
var windSpeed = document.querySelector('.windSpeed')
var humidity = document.querySelector('.humidity')

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid=01b42d308a946e1c8e1ff3c680ca4046')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {
        var nameValue = data['name']
        var tempValue = data['main']['temp']
        var descriptionValue = data['weather'][0]['description']
        var windSpeedValue = data['wind']['speed']
        var humidityValue = data['main']['humidity']

        cityName.innerHTML = 'City: ' + nameValue
        temp.innerHTML = 'Temp: ' + tempValue + ' Celsius'
        description.innerHTML = descriptionValue
        windSpeed.innerHTML = 'Wind Speed: ' + windSpeedValue
        humidity.innerHTML = 'Humidity: ' + humidityValue + '%'
    })

    .catch(err => alert("Invalid city name!"))

    var currentDay = new Date();
    document.querySelector(".currentDay").innerHTML = currentDay;
});

// RESOURCES 
// https://youtu.be/GXrDEA3SIOQ