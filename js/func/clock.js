function getClock(clock) {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;
}

export function startClock(clock) {
  clock.classList.remove("hidden");
  const date = new Date();
  const start = (60 - date.getSeconds()) * 1000;

  getClock(clock);

  setTimeout(() => {
    getClock(clock);
    setInterval(getClock(clock), 60000);
  }, start);
}
