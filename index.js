const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '975036025cmsh03d8423fc98252fp1f9f61jsne4a70a998b2e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const submit = document.getElementById("submit")
const city = document.getElementById("city")
const sun = "https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-512.png"
const sun_cloud = "https://cdn.icon-icons.com/icons2/2211/PNG/512/weather_sun_sunny_cloud_icon_134157.png"
const cloud = "https://cdn-icons-png.flaticon.com/512/2106/2106101.png"
const rain = "https://static.vecteezy.com/system/resources/previews/009/700/808/non_2x/cloud-rain-icon-eps-10-free-vector.jpg"
const heat = "https://cdn-icons-png.flaticon.com/512/2316/2316581.png"
const normal = "https://cdn-icons-png.flaticon.com/512/5097/5097835.png"
const cool = "https://cdn3.iconfinder.com/data/icons/weather-ios-11-black-white/50/Thermometer_Temperature_Cold_Below_zero_Ice_Winter_Freezing_Apple_Weather-512.png"
const humidity_img = document.getElementById("humidity_card")
const temp_img = document.getElementById("temp_card")
const delhi_drop = document.getElementById("delhi_dropdown")
const uttarakhand_drop = document.getElementById("uttarakhand_dropdown")
const bangalore_drop = document.getElementById("bangalore_dropdown")
const container = document.getElementById("container")


const getWeather = (city) => {

cityName.innerHTML = city
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(res => res.json())
    .then((res) => {
        cloud_pct.innerHTML = res.cloud_pct
        // feels_like.innerHTML = res.feels_like
        humidity.innerHTML = res.humidity + " %"
        max_temp.innerHTML = res.max_temp + " deg celcius"
        min_temp.innerHTML = res.min_temp + " deg celcius"
        let date = new Date(res.sunrise*1000)
        let date2 = date.toString()
        date2 = date2.split(' ')
        sunrise.innerHTML = date2[4]
        date = new Date(res.sunset*1000)
        date2 = date.toString()
        date2 = date2.split(' ')
        sunset.innerHTML = date2[4]
        temp.innerHTML = res.temp
        wind_degrees.innerHTML = res.wind_degrees + " degrees"
        wind_speed.innerHTML = res.wind_speed
        if(res.cloud_pct<25){
            humidity_img.src = sun
        }
        else if(res.cloud_pct>=25&&res.cloud_pct<50){
            humidity_img.src = sun_cloud
        }
        if(res.cloud_pct>=50&&res.cloud_pct<75){
            humidity_img.src = cloud
        }
        if(res.cloud_pct>=75&&res.cloud_pct<=100){
            humidity_img.src = rain
        }

        if(res.temp>30){
            temp_img.src = heat
        }
        else if(res.temp<=30&&res.temp>=15){
            temp_img.src = normal
        }
        else if(res.temp<15){
            temp_img.src = cool
        }

        console.log(res)

    })
    .catch((err) => {
        console.log(err)
    });

}

const getDelhi = ()=> {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi`, options)
    .then(res => res.json())
    .then((res) => {
        cloud_pct_delhi.innerHTML = res.cloud_pct + "%"
        feels_like_delhi.innerHTML = res.feels_like + " celcius"
        humidity_delhi.innerHTML = res.humidity + "%"
        max_temp_delhi.innerHTML = res.max_temp + " celcius"
        min_temp_delhi.innerHTML = res.min_temp + " celcius"
        let date = new Date(res.sunrise*1000)
        let date2 = date.toString()
        date2 = date2.split(' ')
        sunrise_delhi.innerHTML = date2[4]
        date2 = date.toString()
        date2 = date2.split(' ')
        sunset_delhi.innerHTML = date2[4]
        temp_delhi.innerHTML = res.temp+ " celcius"
        wind_degrees_delhi.innerHTML = res.wind_degrees
        wind_speed_delhi.innerHTML = res.wind_speed + "Km/hr"
    })
    .catch(err => console.log(err));
}

const getDehradun = ()=> {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dehradun`, options)
    .then(res => res.json())
    .then((res) => {
        cloud_pct_dehradun.innerHTML = res.cloud_pct + "%"
        feels_like_dehradun.innerHTML = res.feels_like + " celcius"
        humidity_dehradun.innerHTML = res.humidity + "%"
        max_temp_dehradun.innerHTML = res.max_temp + " celcius"
        min_temp_dehradun.innerHTML = res.min_temp + " celcius"
        let date = new Date(res.sunrise*1000)
        let date2 = date.toString()
        date2 = date2.split(' ')
        sunrise_dehradun.innerHTML = date2[4]
        date2 = date.toString()
        date2 = date2.split(' ')
        sunset_dehradun.innerHTML = date2[4]
        temp_dehradun.innerHTML = res.temp+ " celcius"
        wind_degrees_dehradun.innerHTML = res.wind_degrees
        wind_speed_dehradun.innerHTML = res.wind_speed + "Km/hr"
    })
    .catch(err => console.log(err));
}

const getBangalore = ()=> {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore`, options)
    .then(res => res.json())
    .then((res) => {
        cloud_pct_bangalore.innerHTML = res.cloud_pct + "%"
        feels_like_bangalore.innerHTML = res.feels_like + " celcius"
        humidity_bangalore.innerHTML = res.humidity + "%"
        max_temp_bangalore.innerHTML = res.max_temp + " celcius"
        min_temp_bangalore.innerHTML = res.min_temp + " celcius"
        let date = new Date(res.sunrise*1000)
        let date2 = date.toString()
        date2 = date2.split(' ')
        sunrise_bangalore.innerHTML = date2[4]
        date2 = date.toString()
        date2 = date2.split(' ')
        sunset_bangalore.innerHTML = date2[4]
        temp_bangalore.innerHTML = res.temp+ " celcius"
        wind_degrees_bangalore.innerHTML = res.wind_degrees
        wind_speed_bangalore.innerHTML = res.wind_speed + "Km/hr"
    })
    .catch(err => console.log(err));
}

const getDhaka = ()=> {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dhaka`, options)
    .then(res => res.json())
    .then((res) => {
        cloud_pct_dhaka.innerHTML = res.cloud_pct + "%"
        feels_like_dhaka.innerHTML = res.feels_like + " celcius"
        humidity_dhaka.innerHTML = res.humidity + "%"
        max_temp_dhaka.innerHTML = res.max_temp + " celcius"
        min_temp_dhaka.innerHTML = res.min_temp + " celcius"
        let date = new Date(res.sunrise*1000)
        let date2 = date.toString()
        date2 = date2.split(' ')
        sunrise_dhaka.innerHTML = date2[4]
        date2 = date.toString()
        date2 = date2.split(' ')
        sunset_dhaka.innerHTML = date2[4]
        temp_dhaka.innerHTML = res.temp+ " celcius"
        wind_degrees_dhaka.innerHTML = res.wind_degrees
        wind_speed_dhaka.innerHTML = res.wind_speed + "Km/hr"
    })
    .catch(err => console.log(err));
}

const getCoimbatore = ()=> {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=coimbatore`, options)
    .then(res => res.json())
    .then((res) => {
        cloud_pct_coimbatore.innerHTML = res.cloud_pct + "%"
        feels_like_coimbatore.innerHTML = res.feels_like + " celcius"
        humidity_coimbatore.innerHTML = res.humidity + "%"
        max_temp_coimbatore.innerHTML = res.max_temp + " celcius"
        min_temp_coimbatore.innerHTML = res.min_temp + " celcius"
        let date = new Date(res.sunrise*1000)
        let date2 = date.toString()
        date2 = date2.split(' ')
        sunrise_coimbatore.innerHTML = date2[4]
        date2 = date.toString()
        date2 = date2.split(' ')
        sunset_coimbatore.innerHTML = date2[4]
        temp_coimbatore.innerHTML = res.temp+ " celcius"
        wind_degrees_coimbatore.innerHTML = res.wind_degrees
        wind_speed_coimbatore.innerHTML = res.wind_speed + "Km/hr"
    })
    .catch(err => console.log(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

delhi_drop.addEventListener("click",()=>{
    getWeather("delhi")
})
uttarakhand_drop.addEventListener("click",()=>{
    getWeather("uttarakhand")
})
bangalore_drop.addEventListener("click",()=>{
    getWeather("bangalore")
})
getWeather("Delhi")
getDelhi()
getDehradun()
getBangalore()
getDhaka()
getCoimbatore()
