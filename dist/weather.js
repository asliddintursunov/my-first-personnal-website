

/*
* Here is some APIs those may be helpful
* const API = `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&appid=cfb1dc599e12470d8f38ea55ae9f28d8`;

* const allCountriesAPI = `https://restcountries.com/v3.1/all`;
*/


let input = document.getElementById('input');
let OkBtn = document.getElementById('ok-button');
let searchedCityName = document.getElementById('city-name');
let currentTemp = document.getElementById('temp');
let description = document.getElementById('description');
let country = document.getElementById('country')
let feelsLike = document.getElementById('feels-like');


const inputValue = async (cityName) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=cfb1dc599e12470d8f38ea55ae9f28d8`)
    const data = await res.json()

    if(data.cod == 200){
        console.log(data);
        setTimeout(() => {
            searchedCityName.style.color =  `cadetblue`;
            searchedCityName.innerText = `${data.name} `;
            country.style.color = 'red';
            country.innerText = `${data.sys.country}`;
            description.style.color = 'cadetblue';
            description.innerText = `${data.weather[0].description}`
            if (data.main.temp > 0) {
                currentTemp.style.color = `rgb(255, 157, 0)`
                currentTemp.innerText = `${data.main.temp} C hot`;
            } else {
                currentTemp.style.color = `lightblue`
                currentTemp.innerText = `${data.main.temp} C cold`;
            } 
            feelsLike.style.color = `cadetblue`;
            feelsLike.innerText = `feels like ${data.main.feels_like} C`; 
        }, 500);
    }
    else{
        setTimeout(() => {
            searchedCityName.style.color =  `red`;
            searchedCityName.innerText = `'${input.value}' not found`;
            country.style.color = `darkgoldenrod`
            country.innerText = ``;
            description.style.color = `darkgoldenrod`
            description.innerText = undefined;
            currentTemp.style.color = `darkgoldenrod`;
            currentTemp.innerText = `null`; 
            feelsLike.style.color = `darkgoldenrod`
            feelsLike.innerText = '';
        }, 500);
    }
}

window.onload = function() {
    input.focus();
    input.value = '';
    searchedCityName.innerText = 'City';
    country.innerText = '';
    currentTemp.innerText = 'Temp'; 
    description.innerText = 'Description';
    feelsLike.innerText = '';
  };

OkBtn.onclick = () => inputValue(input.value);
