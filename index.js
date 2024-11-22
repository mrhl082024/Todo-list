const input = document.getElementById("input-field");
const addButton = document.getElementById("add-Btn");
const listDisplay = document.getElementById("list-display");
const clearListButton = document.getElementById("clear-list");
const todoList = [];

const arrayToHTML = () => {
  for (let i = 0; i < todoList.length; i++) {
    const node = document.createElement("p");
    const parent = document.querySelector("#list-display");
    node.textContent = todoList[i];
    parent.appendChild(node);
  }
};

function clear() {
  document.getElementById("list-display").innerHTML = "";
}

clearListButton.onclick = () => {
  todoList.length = 0;
  let pList = document.querySelector("#list-display > p");
  clear();

  console.log(todoList);
};

input.addEventListener("keydown", (tast) => {
  if (tast.key === "Enter") {
    if (input.value !== "") {
      todoList.push(input.value);
      input.value = "";
      listDisplay.textContent = "";
      arrayToHTML();
      console.log(todoList);
    }
  }
});

addButton.addEventListener("click", () => {
  if (input.value !== "") {
    todoList.push(input.value);
    input.value = "";
    listDisplay.textContent = "";
    arrayToHTML();
    console.log(todoList);
  }
});

// const listObject = [
//   {
//     toDisplay: input.value,
//     isCompleted: false,
//     visible: true,
//   },
// ];
