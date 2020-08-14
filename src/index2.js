let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

let app = document.querySelector("#app");
let h1 = document.createElement("h1");
// your code here
let todoList = document.createElement("ul");

h1.innerText = "Todo List";
app.appendChild(h1);
app.appendChild(todoList);

function renderTodoApp() {
  todoList.innerHTML = "";
  let todoMarkup = "";
  for (let i = 0; i < todos.length; i++) {
    let todoItems = todos[i];
    let stateOfCheckBox = todoItems.completed ? "checked" : "";
    todoMarkup = `
    <li><input type="checkbox" ${stateOfCheckBox}/>${todoItems.description}</li>
    `;
    todoList.innerHTML += todoMarkup;
  }
  // and maybe some here
}

let todoButton = document.querySelector("#button");

function buttonClick() {
  let inputBox = document.querySelector("#input");
  let newTask = {
    completed: false,
    description: inputBox.value,
  };
  todos.push(newTask);
  console.log(todos);
  renderTodoApp();
}

renderTodoApp();
