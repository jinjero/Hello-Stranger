const color = [
  { bg: "#B9EFA3", text: "#000" },
  { bg: "#FFD0E2", text: "#000" },
  { bg: "#B6DBF5", text: "#000" },
  { bg: "#796A57", text: "#68E4EC" },
  { bg: "#3B5B8A", text: "#F5E9B7" },
  { bg: "#523D16", text: "#F298CC" },
];

const buttons = [
  { element: document.querySelector(".green"), color: color[0] },
  { element: document.querySelector(".pink"), color: color[1] },
  { element: document.querySelector(".skyblue"), color: color[2] },
  { element: document.querySelector(".white-blue"), color: color[3] },
  { element: document.querySelector(".blue-yellow"), color: color[4] },
  { element: document.querySelector(".brown-pink"), color: color[5] },
];

buttons.forEach(({ element, color }) => {
  element.addEventListener("click", () => {
    document.documentElement.style.setProperty("--bg-color", color.bg);
    document.documentElement.style.setProperty("--text-color", color.text);

    localStorage.setItem("bgColor", color.bg);
    localStorage.setItem("textColor", color.text);
  });
});
