//update elements for all pre-existing list items
const itemArray = document.getElementsByTagName("li");
for (let i = 0; i < itemArray.length; i++) {
  updateRemoveButtonFor(itemArray[i]);
  updateCheckboxFor(itemArray[i]);
}

function checkInput() {
  const userInput = document.getElementById("newNote");
  if (!userInput.value) { showError("Nothing to add"); }
  return userInput.value != null;
}

function addItem() {
  if (!checkInput()) { return; }
  const newItem = document.createElement("li");
  newItem.className = "item";
  newItem.textContent = userInput.value;
  document.getElementById("list").appendChild(newItem);
  userInput.value = "";

  updateRemoveButtonFor(newItem);
  updateCheckboxFor(newItem);
};

function updateRemoveButtonFor(currentElement) {
  const clickableSpan = document.createElement("span");

  clickableSpan.className = "close";
  clickableSpan.appendChild(document.createTextNode("\u00D7"));
  clickableSpan.onclick = () => {
    this.parentElement.remove();
  };

  currentElement.appendChild(clickableSpan);
}

function updateCheckboxFor(currentElement) {
  currentElement.onclick = (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle('checked');
    }
  }
}

function showError(message) {
  const alertBackground = document.createElement("div");
  alertBackground.className = "alert_bg";
  alertBackground.onclick = () => {
    this.remove();
  }
  const alertFrame = document.createElement("div");
  alertFrame.className = "alert";
  alertFrame.textContent = message;
  alertBackground.appendChild(alertFrame);
  document.getElementById("body").appendChild(alertBackground);
}