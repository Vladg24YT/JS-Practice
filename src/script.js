let addItem = function () {
  let userInput = document.getElementById("newNote");
  if (!userInput.value) {
    window.alert("Nothing to add");
    return;
  }
  let newItem = document.createElement("li");
  newItem.className = "item";
  newItem.appendChild(document.createTextNode(userInput.value));
  document.getElementById("list").appendChild(newItem);
  userInput.value = "";
  updateRemoveButtonFor(newItem);
  updateCheckboxFor(newItem);
};

let updateRemoveButtonFor = function (currentElement) {
  let clickableSpan = document.createElement("span");
  clickableSpan.className = "close";
  clickableSpan.appendChild(document.createTextNode("\u00D7"));
  clickableSpan.onclick = function () {
    let currentItem = this.parentElement;
    currentItem.remove();
  };
  currentElement.appendChild(clickableSpan);
}

let updateCheckboxFor = function (currentElement) {
  let clickableBox = document.createElement("span");
  clickableBox.className = "checkbox";
  currentElement.appendChild(clickableBox);
  currentElement.onclick = function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "LI") {
      e.target.classList.toggle('checked');
    }
  }
}