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

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  // your code here
  let todoList = document.createElement("ul");

  h1.innerText = "Todo List";
  app.appendChild(h1);
  app.appendChild(todoList);

  for (let i = 0; i < todos.length; i++) {
    let todoItems = todos[i];
    let stateOfCheckBox = todoItems.completed ? "checked" : "";
    let todoMarkup = `
    <li><input type="checkbox" ${stateOfCheckBox}/>${todoItems.description}</li>
    `;
    todoList.innerHTML += todoMarkup;
  }
  // and maybe some here
}

let todoButton = document.querySelector("#button");
let inputBox = document.querySelector("#input");

function buttonClick() {
  todos.push(inputBox.value);
  console.log(todos);
}
todoButton.addEventListener("click", buttonClick);

renderTodoApp();
