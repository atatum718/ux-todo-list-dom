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
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let twoListItems = document.createElement("ul");
  let list = `
    <ul>
      <li class = "todo-item">
          <input type= "checkbox"/>
          Take Jim to the hair salon
      </li>
      <li class - "todo-item"
          <input type = "checkbox"/>
          Drop off wedding invitatation at mailbox
      </li>
  </ul>`;
  document.body.append(twoListItems);
  for (let i = 0; i < todos.length; i++) {
    let twoListItems = todos[i];
    let checkBoxesList = ` 
    <li class = 'todo-item'>
        <p> ${twoListItems.completed}<p>
        <p> ${twoListItems.description}<p>
    </li>`;
  }
  twoListItems.innerHTML += list;

  h1.innerText = "Todo List";

  app.appendChild(h1);
  // and maybe some here

  //   twoListItems.innerText =
  //     "Take Jim to the hair salon" + "Drop off wedding invitation at mailbox";
  //   twoListItems.appendChild(checkbox, list);
  //   let newText = document.getElementById("app");
  //   document.body.append(newText);
  //   twoListItems.innertext += checkBoxesList;
}

renderTodoApp();
