window.addEventListener('load', handleLoad);

var messages = [
	'asldkklaskcaldasldla',
	'shadhasghdasdshadgh',
	'asdghasgdhgashdasghas'
];

function handleLoad() {
	//document.querySelector('p').innerHTML = "i'm learning web development with Html,javascript, css";
	setInterval(changeContent, 2000);
}

function changeContent(){
	var index = Math.floor(Math.random() * (messages.length - 1)) + 0;
	var message = messages[index];

	document.querySelector('p').innerText = message;
}