const userForm = document.querySelector(".user-form");
const userInput = userForm.querySelector("input");
const userHello = document.querySelector(".user-hello");
const userPaint = userHello.querySelector("span:nth-child(3)");
console.log(userPaint);

const HIDDEN = "hidden";
const USERNAME = "username";

function onSubmit(event) {
  event.preventDefault();
  userForm.classList.add(HIDDEN);
  const userName = userInput.value;
  localStorage.setItem(USERNAME, userName);
  onPaint(userName);
}

function onPaint(username) {
  userHello.classList.remove(HIDDEN);
  userPaint.innerText = `${username}`;
}

userForm.addEventListener("submit", onSubmit);

const savedUserName = localStorage.getItem(USERNAME);

if (savedUserName === null) {
  userForm.classList.remove(HIDDEN);
  userForm.addEventListener("submit", onSubmit);
} else {
  onPaint(savedUserName);
}
