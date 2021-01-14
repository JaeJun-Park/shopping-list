var max_item = 1000;
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}

function createListElement() {

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("x"));
	deleteBtn.addEventListener("click", function() {ul.removeChild(li);});
	li.appendChild(deleteBtn);

	li.addEventListener("click", function() {li.classList.toggle("done");});
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0&& event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
