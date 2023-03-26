const searchForm = document.querySelector('.search-form'),
      searchInput = document.querySelector('.search-input'),
      temperatureNow = document.querySelector('.temperature'),
      cityNow = document.querySelector('.info-current-city'),
      addCity = document.querySelector('.add-city'),
      locationsList = document.querySelector('.locations-list');

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const cityName = 'boston';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

const cityList = [];
let locationsItem = [];

if(localStorage.getItem('currentCity')) {
  const currentCity = JSON.parse(localStorage.getItem('currentCity'));
  const id = currentCity.id;
  const city = currentCity.name;
  const temperature = currentCity.temperature;
  renderNow(id, city, temperature);
}

if(localStorage.getItem('locationsList')) {
  locationsItem = JSON.parse(localStorage.getItem('locationsList'));
  renderLocationsList();
}

searchForm.addEventListener('submit', getInputValue);
addCity.addEventListener('click', renderAddLocations);
locationsList.addEventListener('click', deleteAndCurrentCity);

function getInputValue(e) {
  e.preventDefault();
  const cityName = searchInput.value;
  getWeather(cityName);
  searchInput.value = '';
  searchInput.focus();
}

function getWeather(cityName) {
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}?q=${cityName}&appid=${apiKey}`)
      .then(response => response.json())
      .then(response => {
        const temperature = (response.main.temp - 273.5).toFixed(1);
        const city = response.name;
        const id = response.id;
        renderNow(id, city, temperature);
        return response;
      })
      .then(response => {
        cityList.push({
          id: response.id,
          name: response.name,
          temperature: response.main.temp,
        });
      })
      .catch(err => console.log(`Text error - ${err}`));
  });
}

function renderNow(id, cityName, temperature) {
  temperatureNow.textContent = `${temperature}\u00B0`;
  cityNow.textContent = cityName;
  
  const currentCity = {id: id, name: cityName, temperature: temperature};
  addCurrentCityToLocalstorage(currentCity);
}

function renderAddLocations() {
  let name;
  let cityInfo;

  if(cityList.length === 0) return
  else {
    cityList.forEach(elem => {
      name = elem.name;
      cityInfo = elem;
    });
  }

  locationsItem.push(cityInfo);

  const HTMLLocationsElement = `<li class="locations-item">
  <a href="" class="locations-link">${name}</a>
  <button class="delete-city"></button>
  </li>`
  locationsList.insertAdjacentHTML('beforeend', HTMLLocationsElement);

  addLocationsToLocalStorage();
}

function renderLocationsList() {
  
  locationsItem.forEach(elem => {

  const HTMLLocationsElement = `<li class="locations-item">
    <a href="" class="locations-link">${elem.name}</a>
    <button class="delete-city"></button>
    </li>`
  locationsList.insertAdjacentHTML('beforeend', HTMLLocationsElement);
  });
}

function deleteAndCurrentCity(e) {
  e.preventDefault();
  if(e.target.className === 'delete-city') {
    const parentNode = e.target.closest('.locations-item');
    const previousElement = e.target.previousElementSibling;
    const cityName = previousElement.textContent;
    
    const index = searchCity(cityName);
    const index2 = searchCity2(cityName)

    cityList.splice(index, 1);
    locationsItem.splice(index2, 1);
    parentNode.remove();
    addLocationsToLocalStorage();
  }

  if(e.target.className === 'locations-link') {
    const parentNode = e.target.closest('.locations-link');
    const cityName = parentNode.textContent;

    const city = locationsItem.filter(city => city.name === cityName);
    city.forEach(item => {
      const id = item.id;
      const name = item.name;
      const temperature = (item.temperature - 273.5).toFixed(1);

      renderNow(id, name, temperature);
    });
  }

}

function searchCity(cityName) {
  const index = cityList.findIndex(city => city.name === cityName);
  return index;
}

function searchCity2(cityName) {
  const index = locationsItem.findIndex(city => city.name === cityName);
  return index;
}

function addCurrentCityToLocalstorage(currentCity) {
  localStorage.setItem('currentCity', JSON.stringify(currentCity));
}

function addLocationsToLocalStorage() {
  localStorage.setItem('locationsList', JSON.stringify(locationsItem));
}