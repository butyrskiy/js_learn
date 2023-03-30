import {searchForm, searchInput, temperatureNow, cityNow, addCity, locationsList, tabsList, detailsCurrentCity, detailsTemperature, detailsFeelsLike, detailsWeather, detailsSunrise, detailsSunset, serverUrl, apiKey} from './modules/constants.js';

import {switchTabs, getWeather, getTime} from './modules/support_functions.js';

export {locations};

const cityArr = [];

const response = JSON.parse(localStorage.getItem('locations'));  
const locations = new Set(response);
renderAllLocations(response);

searchForm.addEventListener('submit', getInputValue);
addCity.addEventListener('click', AddLocations);
locationsList.addEventListener('click', deleteAndCurrentCity);
tabsList.addEventListener('click', switchTabs);

if(localStorage.getItem('currentCity')) {
  const response = JSON.parse(localStorage.getItem('currentCity'));
  render(response);
}

function getInputValue(e) {
  e.preventDefault();
  const cityName = searchInput.value;
  
  getData(cityName);
  searchInput.value = '';
  searchInput.focus();
}

function getData(cityName) {
  fetch(`${serverUrl}?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(response => render(response))
    .catch(err => console.log(`Text error - ${err}`));
};

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

  // locationsArr.push(res);
  locations.add(res);

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
    

    for(const item of locations) {
      if(item.name === cityName) {
        locations.delete(item);
        console.log(item);
      }
    }

    parentNode.remove();
    addLocationsToLocalStorage();
  }

  if(e.target.className === 'locations-link') {
    const parentNode = e.target.closest('.locations-link');
    const cityName = parentNode.textContent;

    let city;
    locations.forEach(cityInfo => {
      if(cityInfo.name === cityName) {
        city = cityInfo;
      }
    });
    render(city);
  }
}

function addCurrentCityToLocalstorage(response) {
  localStorage.setItem('currentCity', JSON.stringify(response));
}

function addLocationsToLocalStorage() {
  localStorage.setItem('locations', JSON.stringify([...locations]));
}