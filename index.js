const inputField = document.querySelector(".input-field");
const addButton = document.querySelector(".add-btn");
const clearList = document.querySelector(".clear-list");
const listContainer = document.querySelector(".list-container");
let i = 0;

function addTask() {
  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputField.value;
    listContainer.appendChild(li);
    li.id = i;
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    span.id = i;
    i++;
  }
  inputField.value = "";
}

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function clearTasks() {
  document.querySelector(".list-container").textContent = "";
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
