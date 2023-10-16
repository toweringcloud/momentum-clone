//-reference
// https://css-tricks.com/almanac/properties/b/background-image/#:~:text=The%20background%2Dimage%20property%20in,CSS%3A%20regular%20images%20and%20gradients

function changeBackgroundColor() {
	const colors = [
		"#ef5777",
		"#575fcf",
		"#4bcffa",
		"#34e7e4",
		"#0be881",
		"#f53b57",
		"#3c40c6",
		"#0fbcf9",
		"#00d8d6",
		"#05c46b",
		"#ffc048",
		"#ffdd59",
		"#ff5e57",
		"#d2dae2",
		"#485460",
		"#ffa801",
		"#ffd32a",
		"#ff3f34",
	];
	const getRandomIndex = () => {
		return Math.floor(Math.random() * colors.length);
	};

	let firstColor = colors[getRandomIndex()];
	let secondColor = colors[getRandomIndex()];
	if (firstColor === secondColor) {
		return changeBackgroundColor();
	}
	document.body.style.background = `linear-gradient(90deg, ${firstColor}, ${secondColor})`;
}

function changeBackgroundImage() {
	const images = [
		// "a01_traditional.png",
		// "a02_modern.png",
		// "a03_cybatic.png",
		"b01_jan.png",
		"b02_feb.png",
		"b03_mar.png",
		"b04_apr.png",
		"b05_may.png",
		"b06_jun.png",
		"b07_jul.png",
		"b08_aug.png",
		"b09_sep.png",
		"b10_oct.png",
		"b11_nov.png",
		"b12_dec.png",
	];
	const getRandomIndex = images[Math.floor(Math.random() * images.length)];
	const resourceHome = "https://github.com/toweringcloud/momentum-clone";
	document.body.style.background = `url(${resourceHome}/blob/main/img/${getRandomIndex}) no-repeat`;
	document.body.style.backgroundSize = "cover";
}

function changeBackgroundStyle() {
	savedUserName = localStorage.getItem("userName");
	if (savedUserName === null) {
		changeBackgroundColor();
	} else {
		changeBackgroundImage();
	}
}
changeBackgroundStyle();
setInterval(changeBackgroundStyle, 5000);
