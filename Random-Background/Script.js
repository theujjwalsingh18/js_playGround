const start = document.querySelector(".btn-1");
const stop = document.querySelector(".btn-2");
let changeEvent;

const randColor = function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBG = function () {
  if (!changeEvent) {
    changeEvent = setInterval(changeBGColor, 1000);
  }

  function changeBGColor() {
    document.body.style.backgroundColor = randColor();
  }
};

start.addEventListener("click", changeBG, false);
stop.addEventListener(
  "click",
  () => {
    clearInterval(changeEvent);
    changeEvent = null;
  },
  false
);
