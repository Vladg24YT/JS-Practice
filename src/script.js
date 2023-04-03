//update elements for all pre-existing list items
const itemArray = document.getElementsByTagName("li");
for (let i = 0; i < itemArray.length; i++) {
  updateRemoveButtonFor(itemArray[i]);
  updateCheckboxFor(itemArray[i]);
}

const checkInput = () => {
  const userInput = document.getElementById("newNote");
  if (!userInput.value) { showError("Nothing to add"); }
  return userInput.value != null;
}

const addItem = () => {
  if (!checkInput()) { return; }
  const newItem = document.createElement("li");
  newItem.className = "item";
  newItem.textContent = userInput.value;
  document.getElementById("list").appendChild(newItem);
  userInput.value = "";

  updateRemoveButtonFor(newItem);
  updateCheckboxFor(newItem);
};

const updateRemoveButtonFor = (currentElement) => {
  const clickableSpan = document.createElement("span");

  clickableSpan.className = "close";
  clickableSpan.appendChild(document.createTextNode("\u00D7"));
  clickableSpan.onclick = () => {
    this.parentElement.remove();
  };

  currentElement.appendChild(clickableSpan);
}

const updateCheckboxFor = (currentElement) => {
  const clickableBox = document.createElement("span");
  clickableBox.className = "checkbox";

  currentElement.appendChild(clickableBox);
  currentElement.onclick = (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle('checked');
    }
  }
}

const showError = (message) => {
  window.alert(message);
  /*const alertFrame = document.createElement("div");
  alertFrame.className = "alert";
  alertFrame.textContent = message;
  document.getElementById("body").appendChild(alertFrame);*/
}