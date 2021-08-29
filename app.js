const getWeather = async () => {
    const city = document.getElementById('search-input').value;
    if(city == ''){
        
    }
    else{
        const key = '79b1642620f968eaac6444bcfd596096';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        const res = await fetch(url);
        const data = await res.json();
        setWeather(data);
    }
}

const setWeather = (city) => {
        document.getElementById('city-name').innerText = city.name;
        const temp = parseFloat(city.main.temp - 273).toFixed(2);
        document.getElementById('temperature').innerText = temp;
        document.getElementById('weather').innerText = city.weather[0].main;
        // set image
        const imgSrc = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
        document.getElementById('img').src = imgSrc;
}