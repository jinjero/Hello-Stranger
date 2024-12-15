import { onSubmit, onPaint } from "./func/user.js";
import { startClock } from "./func/clock.js";
import { onGeoSuccess, onGeoFail } from "./func/weather.js";

const userForm = document.querySelector(".user-form");
const userInput = userForm.querySelector("input");
const userHello = document.querySelector(".user-hello");
const userPaint = userHello.querySelector(
  ".user-hello__name span:nth-child(2)"
);
const clock = document.querySelector(".clock");
const weather = document.querySelector(".weather");
const menu = document.querySelector(".menu");
const link = document.querySelector(".music-link");
const music = document.querySelector(".music");

const HIDDEN = "hidden";
const USERNAME = "username";
const API_KEY = "c6ddfbf86ba792e376ac56508a7908c1";

const lyrics = [
  {
    lyric: "비로소 우리의 세상이 완벽해, 사랑으로",
    link: "https://youtu.be/Q49pnA4jsp8?si=q1zKVjc8pMp06Eca",
  },
  {
    lyric: "But I’ll pray for you all the time, seasons",
    link: "https://youtu.be/g19EuryzWbE?si=9kugKEUUI8frMstx",
  },
  {
    lyric: "So how can my day be bad?, bad",
    link: "https://youtu.be/6Q5xqNkCk7w?si=lezmBRd_HyhobPCv",
  },
  {
    lyric: "‘Cause you’re always mysterious to me, sunny days",
    link: "https://youtu.be/hRjC3ek0Oxk?si=oIgVvSqZu4nnaI28",
  },
  {
    lyric:
      "Peach eyes and blue skies, I’ll be with you on your ride, peach eyes",
    link: "https://youtu.be/Q-UZygeboOc?si=gY104GmhWUWkmsva",
  },
  {
    lyric: "streets full of ruins and rubbish, pueblo",
    link: "https://youtu.be/Eh7xsHKQ_6k?si=kDPnHY9fdcJ860zA",
  },
  {
    lyric: "my day is getting coloured, daisy.",
    link: "https://youtu.be/OwHonodA2hE?si=Cvv6XSNGDgQYPpW8",
  },
  {
    lyric: "And we held the moon in our arms, light",
    link: "https://youtu.be/6DLLVIOBRmQ?si=PCxnnHWLkLe-_Smf",
  },
  {
    lyric: "신발이 닳도록 풀 밭을 뛰어, pink",
    link: "https://youtu.be/udaVFwtgmS4?si=Oiv6rMUD4k1QM36q",
  },
  {
    lyric: "Ooh, we surf like jellyfish, surf.",
    link: "https://youtu.be/PKLCnAQmNN4?si=W31hjjq156rcgHby",
  },
  {
    lyric: "we just dance, we just dance, play with earth!",
    link: "https://youtu.be/t3Lwj7lpZGo?si=1gKSgwJuZw43NtRW",
  },
];

// username, clock
userForm.addEventListener("submit", (event) => {
  onSubmit(
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
  );
  console.log(weather);
});

const savedUserName = localStorage.getItem(USERNAME);

if (savedUserName === null) {
  userForm.classList.remove(HIDDEN);
} else {
  onPaint(savedUserName, userHello, userPaint, weather, menu, music, HIDDEN);
  startClock(clock);
}

// weather
navigator.geolocation.getCurrentPosition(
  (position) => {
    onGeoSuccess(position, weather, API_KEY);
  },
  () => onGeoFail(weather)
);

// color
const savedBgColor = localStorage.getItem("bgColor");
const savedTextColor = localStorage.getItem("textColor");

if (savedBgColor && savedTextColor) {
  document.documentElement.style.setProperty("--bg-color", savedBgColor);
  document.documentElement.style.setProperty("--text-color", savedTextColor);
}

// music
const musicLyric = lyrics[Math.floor(Math.random() * lyrics.length)];

music.innerText = musicLyric.lyric;
link.href = musicLyric.link;
