let addItem = function() {
    let userInput = document.getElementById('newNote');
    if (!userInput.value) {
        window.alert("Nothing to add");
        return;
    }
    let newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(userInput.value));
    document.getElementById('list').appendChild(newItem);
    userInput.value = '';
}