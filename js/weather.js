const weather = document.querySelector("#weather");
const how = document.querySelector("#weather span:first-child");
const where = document.querySelector("#weather span:last-child");

function onGeoPass(position) {
	const API_KEY = "{your_credential}";
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			how.innerText = ` ${data.weather[0].main}, ${data.main.temp}°`;
			where.innerText = `${data.name}`;
		});
}

function onGeoFail() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoPass, onGeoFail);
