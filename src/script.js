let addItem = function() {
    let userInput = document.getElementById('newNote').value;
    if (!userInput) {
        window.alert("Nothing to add");
        return;
    }
    let newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(userInput));
    document.getElementById('list').appendChild(newItem);
    userInput.value = '';
}