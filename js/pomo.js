const time = document.querySelector(".pomo-time");
const progress = document.querySelector(".pomo-progress");
const startBtn = document.querySelector(".pomo-start");

let isDone = false;

function onReset(event) {
  startBtn.classList.remove("hidden");
  event.target.classList.add("hidden");
  progress.style.background = "#B9EFA3";
}

function onTimer(start, totalTime) {
  const elapsedTime = Date.now() - start;
  const timer = Math.min(elapsedTime / totalTime, 1);
  const percentage = timer * 100;

  progress.style.background = `conic-gradient(black ${percentage}%, #B9EFA3 0%)`;

  if (timer < 1) {
    requestAnimationFrame(() => onTimer(start, totalTime));
  } else {
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "pomo-done pomo-button";
    progress.appendChild(doneBtn);
    doneBtn.addEventListener("click", onReset);
  }
}

startBtn.addEventListener("click", () => {
  const start = Date.now();
  const totalTime = parseInt(time.value) * 60 * 1000;

  startBtn.classList.add("hidden");
  onTimer(start, totalTime);
});
