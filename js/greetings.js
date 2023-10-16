const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const welcome = document.querySelector("#welcome");
const logout = document.querySelector("#signout");

function onLogout(event) {
	event.preventDefault();
	welcome.classList.add("hidden");
	logout.classList.add("hidden");
	loginForm.classList.remove("hidden");
	localStorage.removeItem("userName");
	userName = null;
	showTodos();
	changeBackgroundStyle();
}

function showWelcome(userName) {
	welcome.innerText = `Welcome to ${userName}!`;
	welcome.classList.remove("hidden");
	logout.classList.remove("hidden");
	logout.addEventListener("click", onLogout);
}

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add("hidden");
	const userName = loginInput.value;
	localStorage.setItem("userName", userName);
	savedUserName = localStorage.getItem("userName");
	showWelcome(userName);
	showTodos();
	changeBackgroundStyle();
}

savedUserName = localStorage.getItem("userName");
if (savedUserName === null) {
	welcome.classList.add("hidden");
	logout.classList.add("hidden");
	loginForm.classList.remove("hidden");
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	showWelcome(savedUserName);
}
