const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

const TIMER = 1000;

refs.startButton.addEventListener('click', startColorCycle);
refs.stopButton.addEventListener('click', stopColorSycle);
let intervalId = null;

function startColorCycle() {
  intervalId = setInterval(bodyColorRandomChange, TIMER);
}

function stopColorSycle() {
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function bodyColorRandomChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
