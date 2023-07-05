console.log('Hello!');
const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
};

// console.log('refs.startButton :>> ', refs.startButton);
// console.log('refs.stopButton :>> ', refs.stopButton);

refs.startButton.addEventListener('click', startColorCycle);
refs.stopButton.addEventListener('click', stopColorSycle);

function startColorCycle() {}

function stopColorSycle() {}
