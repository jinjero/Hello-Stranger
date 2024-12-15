const dday = document.querySelector(".dday");
const ddayInput = document.querySelector(".dday-input");
const ddayDate = document.querySelector(".dday-date");
const ddayTitle = document.querySelector(".dday-title");
const ddaySet = document.querySelector(".dday-set");

let DDAY = [];

function onSave(DDAY) {
  localStorage.setItem("dday", JSON.stringify(DDAY));
}

function onDelete(event, input) {
  const output = event.target.parentElement.parentElement;
  const updatedDday = DDAY.filter((dday) => dday.id !== parseInt(output.id));

  DDAY = updatedDday;
  onSave(DDAY);

  output.remove();
  input.classList.remove("hidden");
}

function onCalc(dateValue) {
  const goal = new Date(dateValue);
  const now = new Date();

  return Math.ceil((goal - now) / (1000 * 60 * 60 * 24));
}

function onPaint(obj, input, dateValue, titleValue) {
  input.classList.add("hidden");
  const day = onCalc(dateValue);

  const outputDiv = document.createElement("div");
  outputDiv.className = "dday-output";
  outputDiv.id = obj.id;

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.className = "dday-date";
  dateInput.value = dateValue;

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.className = "dday-title";
  titleInput.value = titleValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "( delete )";
  deleteBtn.className = "dday-delete";

  const dateSpan = document.createElement("span");
  dateSpan.textContent = `D-${day}`;
  dateSpan.className = "dday-span";

  const innerDiv = document.createElement("div");
  innerDiv.className = "dday-inner";
  innerDiv.appendChild(titleInput);
  innerDiv.appendChild(dateSpan);
  innerDiv.appendChild(deleteBtn);

  outputDiv.appendChild(dateInput);
  outputDiv.appendChild(innerDiv);

  dday.appendChild(outputDiv);

  deleteBtn.addEventListener("click", (event) => onDelete(event, input));
}

function onClick(input, date, title) {
  if (!date.value || !title.value) {
    alert("Enter D-Day date and title.");
    return;
  }

  const newDdayObj = {
    id: Date.now(),
    title: title.value,
    date: date.value,
  };

  DDAY.push(newDdayObj);
  onPaint(newDdayObj, input, date.value, title.value);
  onSave(DDAY);
}

ddaySet.addEventListener("click", () =>
  onClick(ddayInput, ddayDate, ddayTitle)
);
ddayTitle.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    onClick(ddayInput, ddayDate, ddayTitle);
  }
});

const savedDday = localStorage.getItem("dday");

if (savedDday) {
  const parsedDday = JSON.parse(savedDday);
  DDAY = parsedDday;
  parsedDday.forEach((item) => {
    onPaint(item, ddayInput, item.date, item.title);
  });
}
