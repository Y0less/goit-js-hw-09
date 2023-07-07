const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

const TIMER = 1000;

refs.startButton.addEventListener('click', startColorCycle);
refs.stopButton.addEventListener('click', stopColorSycle);
buttonStateOff();
let intervalId = null;

function startColorCycle() {
  intervalId = setInterval(bodyColorRandomChange, TIMER);
  buttonsStateOn();
}

function stopColorSycle() {
  clearInterval(intervalId);
  refs.startButton.removeAttribute('disabled');
  refs.stopButton.setAttribute('disabled', null);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function bodyColorRandomChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function buttonsStateOn() {
  refs.startButton.setAttribute('disabled', null);
  refs.stopButton.removeAttribute('disabled');
}

function buttonStateOff() {
  refs.startButton.removeAttribute('disabled');
  refs.stopButton.setAttribute('disabled', null);
}
