import { startClock } from "./clock.js";

export function onSubmit(
  event,
  userForm,
  userInput,
  userHello,
  userPaint,
  clock,
  weather,
  menu,
  music,
  HIDDEN,
  USERNAME
) {
  event.preventDefault();
  userForm.classList.add(HIDDEN);
  const username = userInput.value;
  localStorage.setItem(USERNAME, username);
  onPaint(username, userHello, userPaint, weather, menu, music, HIDDEN);

  clock.classList.remove(HIDDEN);
  startClock(clock);

  // weather.classList.remove(HIDDEN);
  // menu.classList.remove(HIDDEN);
  // music.classList.remove(HIDDEN);
}

export function onPaint(
  username,
  userHello,
  userPaint,
  weather,
  menu,
  music,
  HIDDEN
) {
  userHello.classList.remove(HIDDEN);
  userPaint.innerText = `${username}`;

  weather.classList.remove(HIDDEN);
  menu.classList.remove(HIDDEN);
  music.classList.remove(HIDDEN);
}
