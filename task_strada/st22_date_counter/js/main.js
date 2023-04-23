const years = document.querySelector('.years'),
  days = document.querySelector('.days'),
  hours = document.querySelector('.hours'),
  minutes = document.querySelector('.minutes'),
  seconds = document.querySelector('.seconds'),
  form = document.querySelector('.set_date'),
  input = document.querySelector('.input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('date', input.value);
});

function countdownTimer() {
  const futureDate = new Date(localStorage.getItem('date'));
  const todayDate = Date.now();
  const difference = futureDate - todayDate;

  const y = Math.floor(difference / 1000 / 60 / 60 / 24 / 30 / 12);
  const d = Math.floor((difference / 1000 / 60 / 60 / 24) % 30);
  const h = Math.floor((difference / 1000 / 60 / 60) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);

  years.innerHTML = y;
  days.innerHTML = d < 10 ? '0' + d : d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(countdownTimer, 1000);
