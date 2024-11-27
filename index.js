const inputField = document.querySelector(".input-field");
const addButton = document.querySelector(".add-btn");
const clearList = document.querySelector(".clear-list");
const listContainer = document.querySelector(".list-container");

function addTask() {
  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputField.value;
    listContainer.appendChild(li);
    let checked = document.createElement("input");
    checked.type = "checkbox";
    li.appendChild(checked);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  inputField.value = "";
}

listContainer.addEventListener("click", (e) => {
  e.target.tagName === "span";
  e.target.parentElement.remove();
});

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function clearTasks() {
  document.querySelector(".list-container").textContent = "";
}
