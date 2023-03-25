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

searchForm.addEventListener('submit', getInputValue);
addCity.addEventListener('click', renderAddLocations);
locationsList.addEventListener('click', deleteCity);

function getInputValue(e) {
  e.preventDefault();
  const cityName = searchInput.value;
  getWeather(cityName);
  searchInput.value = '';
}

function getWeather(cityName) {
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}?q=${cityName}&appid=${apiKey}`)
      .then(response => response.json())
      .then(response => {
        const temperature = (response.main.temp - 273.5).toFixed(1);
        const city = response.name;
        renderNow(temperature, city)
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

function renderNow(temperature, city) {
  temperatureNow.textContent = `${temperature}\u00B0`;
  cityNow.textContent = city;
}

function renderAddLocations() {
  let cityName;
  
  cityList.forEach(elem => {
    cityName = elem.name;
  });

  const HTMLLocationsElement = `<li class="locations-item">
  <a href="" class="locations-link">${cityName}</a>
  <button class="delete-city"></button>
</li>`
  locationsList.insertAdjacentHTML('beforeend', HTMLLocationsElement);
}

function deleteCity(e) {
  if(e.target.className === 'delete-city') {
    const parentNode = e.target.closest('.locations-item');
    const previousElement = e.target.previousElementSibling;
    const cityName = previousElement.textContent;
    
    const index = searchCity(cityName);

    cityList.splice(index, 1);
    parentNode.remove();
  }
}

function searchCity(cityName) {
  const index = cityList.findIndex(city => city.name === cityName);

    return index;
}