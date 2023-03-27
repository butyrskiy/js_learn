const searchForm = document.querySelector('.search-form'),
      searchInput = document.querySelector('.search-input'),
      temperatureNow = document.querySelector('.temperature'),
      cityNow = document.querySelector('.info-current-city'),
      addCity = document.querySelector('.add-city'),
      locationsList = document.querySelector('.locations-list'),
      tabsList = document.querySelector('.tabs-list'),
      tabsNow = document.querySelector('.tabs-now'),
      tabsDetails = document.querySelector('.tabs-details'),
      tabsForecast = document.querySelector('.tabs-forecast'),
      detailsCurrentCity = document.querySelector('.details-current-city'),
      detailsTemperature = document.querySelector('.temperature-details-content'),
      detailsFeelsLike = document.querySelector('.feels_like-details-content'),
      detailsWeather = document.querySelector('.weather-details-content'),
      detailsSunrise = document.querySelector('.sunrise-details-content'),
      detailsSunset = document.querySelector('.sunset-details-content');

      
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const cityName = 'boston';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

const cityArr = [];
let locationsArr = [];

searchForm.addEventListener('submit', getInputValue);
addCity.addEventListener('click', AddLocations);
locationsList.addEventListener('click', deleteAndCurrentCity);
tabsList.addEventListener('click', switchTabs);

if(localStorage.getItem('currentCity')) {
  const response = JSON.parse(localStorage.getItem('currentCity'));
  render(response);
}

if(localStorage.getItem('locationsList')) {
  const response = JSON.parse(localStorage.getItem('locationsList'));
  locationsArr = response;
  renderAllLocations(response);
}

function getInputValue(e) {
  e.preventDefault();
  const cityName = searchInput.value;
  
  getData(cityName);
  searchInput.value = '';
  searchInput.focus();
}

function getData(cityName) {
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}?q=${cityName}&appid=${apiKey}`)
      .then(response => response.json())
      .then(response => render(response))
      .catch(err => console.log(`Text error - ${err}`));
  });
}

function render(response) {

  const id = response.id,
        city = response.name,
        temperature = (response.main.temp - 273.5).toFixed(1),
        feelsLike = (response.main.feels_like - 273,5).toFixed(1),
        weather = getWeather(response),
        sunrise = getTime(response.sys.sunrise),
        sunset = getTime(response.sys.sunset);

  cityNow.textContent = city;
  temperatureNow.textContent = `${temperature}\u00B0`;
  detailsCurrentCity.textContent = city;
  detailsTemperature.textContent = `${temperature}\u00B0`;
  detailsFeelsLike.textContent = feelsLike;
  detailsWeather.textContent = weather;
  detailsSunrise.textContent = sunrise;
  detailsSunset.textContent = sunset;

  cityArr.push(response);

  addCurrentCityToLocalstorage(response);
}

function AddLocations() {
  const res = JSON.parse(localStorage.getItem('currentCity'));

  const HTMLLocationsElement = `<li class="locations-item">
  <a href="" class="locations-link">${res.name}</a>
  <button class="delete-city"></button>
  </li>`
  locationsList.insertAdjacentHTML('beforeend', HTMLLocationsElement);

  locationsArr.push(res);

  addLocationsToLocalStorage();
}

function renderAllLocations(response) {
  response.forEach(elem => {
  const HTMLLocationsElement = `<li class="locations-item">
  <a href="" class="locations-link">${elem.name}</a>
  <button class="delete-city"></button>
  </li>`
  locationsList.insertAdjacentHTML('beforeend', HTMLLocationsElement);
  })
}

function deleteAndCurrentCity(e) {
  e.preventDefault();
  if(e.target.className === 'delete-city') {
    const parentNode = e.target.closest('.locations-item');
    const previousElement = e.target.previousElementSibling;
    const cityName = previousElement.textContent;
    
    const index = searchCity(cityName);

    locationsArr.splice(index, 1);
    parentNode.remove();
    addLocationsToLocalStorage();
  }

  if(e.target.className === 'locations-link') {
    const parentNode = e.target.closest('.locations-link');
    const cityName = parentNode.textContent;

    const city = locationsArr.filter(city => city.name === cityName);
    const obj = Object.assign({}, city);
    render(city[0]);
  }
}

function addCurrentCityToLocalstorage(response) {
  localStorage.setItem('currentCity', JSON.stringify(response));
}

function addLocationsToLocalStorage() {
  localStorage.setItem('locationsList', JSON.stringify(locationsArr));
}

function switchTabs(e) {
  e.preventDefault();

  if(e.target.textContent === 'Now') {
    tabsNow.classList.remove('hidden');
    tabsDetails.classList.add('hidden');
    tabsForecast.classList.add('hidden');
  } else if(e.target.textContent === 'Details') {
    tabsNow.classList.add('hidden');
    tabsDetails.classList.remove('hidden');
    tabsForecast.classList.add('hidden');
  } else if(e.target.textContent === 'Forecast') {
    tabsNow.classList.add('hidden');
    tabsDetails.classList.add('hidden');
    tabsForecast.classList.remove('hidden');
  }
}

function getWeather(response) {
  let weather;
  response.weather.forEach(res => {
  weather = res.main;
  })
  return weather;
}

function getTime(time) {
  let date = new Date(time * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime = `${hours}:${parseInt(minutes)}:${parseInt(seconds)}`
  return formattedTime;
}

function searchCity(cityName) {
  const index = locationsArr.findIndex(city => city.name === cityName);
  return index;
}