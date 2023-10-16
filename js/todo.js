const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	li.remove();
	saveToDos();
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	// const button = document.createElement("button");
	// button.innerText = "X";
	// button.addEventListener("click", deleteToDo);
	const button = document.createElement("i");
	button.className = "fa-solid fa-trash";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		id: Date.now(),
		text: newTodo,
	};
	paintToDo(newTodoObj);
	toDos.push(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}

function showTodos() {
	savedUserName = localStorage.getItem("userName");
	if (savedUserName === null) {
		document.querySelector("#todo").hidden = true;
	} else {
		document.querySelector("#todo").hidden = false;
	}
}
showTodos();
setInterval(showTodos, 5000);
