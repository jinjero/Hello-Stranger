import { todoPaint, todoSubmit } from "./func/todo.js";

const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

let TODOS = [];

todoForm.addEventListener("submit", (event) => {
  todoSubmit(event, todoInput, todoList, TODOS);
});

const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  TODOS = parsedTodos;
  parsedTodos.forEach((newTodoObj) => todoPaint(newTodoObj, todoList, TODOS));
}
