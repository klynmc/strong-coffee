var button = document.querySelector('.submitBtn')
var inputVal = document.querySelector('.inputVal')
var name = document.querySelector('.name')
var temp = document.querySelector('.temp')
var description = document.querySelector('.description')

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid=01b42d308a946e1c8e1ff3c680ca4046')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name']
        var tempValue = data['main']['temp']
        var descriptionValue = data['weather'][0]['description']

        name.innerHTML = nameValue
        temp.innerHTML = tempValue
        description.innerHTML = descriptionValue
    })

    .catch(err => alert("Invalid city name!"))
});

// RESOURCES 
// https://youtu.be/GXrDEA3SIOQ