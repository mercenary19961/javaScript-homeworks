const apiKey = 'd3de55586eab71de59e1a59f6f3f093d';

const dateAndDay = document.querySelector(".date-day");
const locationElement = document.querySelector(".location");
const weatherTemp = document.querySelector(".weather-temp");
const weatherDesc = document.querySelector(".weather-desc");
const pressureValue = document.querySelector(".pressure-value");
const humidityView = document.querySelector(".humidity-view");
const windView = document.querySelector(".wind-view");
const selectElement = document.querySelector('.location-button.listcity');

async function getWeather(city) {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error("hmmm something went banana")
        }
        const data = await response.json();
        changeCity(data);
    } catch (error) {
        console.error("Something went banana with your fetch operation", error);
    }
}

function changeCity(data) {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonthIndex = today.getMonth();
    const currentYear = today.getFullYear();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    dateAndDay.textContent = `${currentDay} ${monthNames[currentMonthIndex]} ${currentYear}`;
    locationElement.textContent = `${data.name}, ${data.sys.country}`;
    weatherTemp.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDesc.textContent = `${data.weather[0].main}`;
    pressureValue.textContent = `${data.main.pressure} hPa`;
    humidityView.textContent = `${data.main.humidity} %`;
    windView.textContent = `${data.wind.speed} km/h`;
}

selectElement.addEventListener('change', (event) => {
    const selectedCity = event.target.value;
    getWeather(selectedCity);
    localStorage.setItem('selectedCity', selectedCity);
});

const storedCity = localStorage.getItem('selectedCity');
if (storedCity) {
    selectElement.value = storedCity;
    getWeather(storedCity);
};
getWeather(selectElement.value);



