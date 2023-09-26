const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '975036025cmsh03d8423fc98252fp1f9f61jsne4a70a998b2e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`, options)
    .then(res => res.json())
    .then((res) => {
        cloud_pct.innerHTML = res.cloud_pct
        feels_like.innerHTML = res.feels_like
        humidity.innerHTML = res.humidity
        max_temp.innerHTML = res.max_temp
        min_temp.innerHTML = res.min_temp
        sunrise.innerHTML = res.sunrise
        sunset.innerHTML = res.sunset
        temp.innerHTML = res.temp
        wind_degrees.innerHTML = res.wind_degrees
        wind_speed.innerHTML = res.wind_speed
        console.log(res)
    })
    .catch(err => console.log(err));
}

submit.addEventListener("click",()=>{
    
})