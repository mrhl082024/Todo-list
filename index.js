const inputField = document.querySelector(".input-field");
const addButton = document.querySelector(".add-btn");
const clearList = document.querySelector(".clear-list");
const listContainer = document.querySelector(".list-container");

function addTask() {
  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "";
    li.appendChild(span);
  }
  inputField.value = "";
  savedata();
}

addButton.addEventListener("click", function (addTask) {});
