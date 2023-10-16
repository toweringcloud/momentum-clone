const d_day = document.querySelector("h2#d-day");
const clock = document.querySelector("h1#clock");

function showTimeLeft() {
	const now = new Date();
	const lastday = new Date(`${now.getFullYear()}-12-31`);
	const diff = lastday - now;

	const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
	const diffHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const diffMinutes = Math.floor((diff / (1000 * 60)) % 60);
	const diffSeconds = Math.floor((diff / 1000) % 60);

	const days = String(diffDays).padStart(2, "0");
	const hours = String(diffHours).padStart(2, "0");
	const minutes = String(diffMinutes).padStart(2, "0");
	const seconds = String(diffSeconds).padStart(2, "0");

	d_day.innerText = `[2023] ${days}d ${hours}h ${minutes}m ${seconds}s left!`;
}

function showClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

showTimeLeft();
setInterval(showTimeLeft, 1000);

showClock();
setInterval(showClock, 1000);
