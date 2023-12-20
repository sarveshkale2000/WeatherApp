const apiKey = "08037c913c8aab96cf84a8ab52286112";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){

    

    const response = await fetch(apiURL + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none";
    }

    else{
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"
    
    
    var data = await response.json();




    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
        
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
        
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        
    }
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png";
        
    }
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/humidity.png";
        
    }
    else if(data.weather[0].main == "snow"){
        weatherIcon.src = "images/snow.png";
        
    }
    else if(data.weather[0].main == "wind"){
        weatherIcon.src = "images/wind.png";
        
    }
}

}

searchbtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})



