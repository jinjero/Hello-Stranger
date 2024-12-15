function todoSave(TODOS) {
  localStorage.setItem("todos", JSON.stringify(TODOS));
}

function todoDelete(event, TODOS) {
  const li = event.target.parentElement;
  li.remove();

  const updatedTodos = TODOS.filter((todo) => todo.id !== parseInt(li.id));
  TODOS.length = 0;
  TODOS.push(...updatedTodos);
  todoSave(TODOS);
}

function todoCheck(event, checkBtn, TODOS) {
  const li = event.target.parentElement.parentElement;
  const findTodo = TODOS.find((item) => item.id == li.id);

  if (!findTodo.clicked) {
    checkBtn.innerText = "∨";
    findTodo.clicked = true;
  } else {
    checkBtn.innerText = "";
    findTodo.clicked = false;
  }

  todoSave(TODOS);
}

export function todoPaint(newTodoObj, todoList, TODOS) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const checkBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  li.id = newTodoObj.id;
  li.appendChild(div);
  li.appendChild(deleteBtn);

  div.appendChild(checkBtn);
  div.appendChild(span);
  div.classList.add("todo-text");

  checkBtn.className = "todo-delete";

  if (newTodoObj.clicked) {
    checkBtn.innerText = "∨";
    newTodoObj.clicked = true;
  } else {
    checkBtn.innerText = "";
    newTodoObj.clicked = false;
  }
  checkBtn.addEventListener("click", (event) =>
    todoCheck(event, checkBtn, TODOS)
  );

  span.innerText = newTodoObj.text;
  deleteBtn.innerText = "⌫";
  deleteBtn.className = "todo-delete";
  deleteBtn.addEventListener("click", (event) => todoDelete(event, TODOS));

  todoList.appendChild(li);
}

export function todoSubmit(event, todoInput, todoList, TODOS) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
    clicked: false,
  };

  TODOS.push(newTodoObj);
  todoPaint(newTodoObj, todoList, TODOS);
  todoSave(TODOS);
}
