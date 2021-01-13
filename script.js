var max_item = 3;
var current_item = 0;
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	if (current_item >= max_item) {
		alert("your shopping list is full!!!");
		return;
	}

	var li = document.createElement("li");
	li.style.display = "inline";
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", function() {li.classList.toggle("done");});
	ul.appendChild(li);
	input.value = "";

	/* add button next to the new list */
	var del_btn = document.createElement("button");
	del_btn.appendChild(document.createTextNode("x"));
	del_btn.addEventListener("click", function() {li.remove(); del_btn.remove(); current_item--;});
	ul.insertBefore(del_btn, li.nextSibling);

	ul.insertBefore(document.createElement("br"), del_btn.nextSibling);

	current_item++;
	console.log(current_item+'/'+max_item);
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
