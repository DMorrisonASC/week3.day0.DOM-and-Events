// Need to make a variable to represent main_container
const mainContainer = document.getElementsByClassName("main_container")[0];
// Creates new div and adds 2 classes
const newDiv = document.createElement("div");
newDiv.classList.add("champ_container");
newDiv.classList.add("pyke");
// Adds a new div into main_container(div)
mainContainer.appendChild(newDiv);

// adds
const pykeText = document.createElement("h2");
const newContent = document.createTextNode("pyke, the bloodharbor ripper");
newDiv.appendChild(pykeText);
pykeText.appendChild(newContent);
