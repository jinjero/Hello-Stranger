function convertDay() {
  const day = new Date().getDay();
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thrusday",
    "friday",
    "saturday",
  ];

  return days[day];
}

export function onGeoSuccess(position, weather, API_KEY) {
  const day = convertDay();
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `happy ${day}, its ${data.weather[0].main} in ${data.name}`;
    });
}

export function onGeoFail(weather) {
  // alert("Can't find your location.");
  const day = convertDay();
  weather.innerText = `happy ${day}`;
}
