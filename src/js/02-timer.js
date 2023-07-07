import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  datePicker: document.querySelector('#datetime-picker'),
  startButton: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  //   minDate: 'today',
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
    }
  },
};

const fp = flatpickr(refs.datePicker, options);
let timeLeft;
refs.startButton.addEventListener('click', handleStart);

function handleStart() {
  if (fp.selectedDates[0] < new Date()) {
    Notify.warning('Please choose valid date');
    return;
  }
  Notify.success('Countdown started!');
  const counterID = setInterval(() => {
    timeLeft = fp.selectedDates[0] - new Date();

    if (timeLeft <= 0) {
      clearInterval(counterID);
      timeLeft = 0;
      Notify.success('Countdown completed!');
    }
    refreshCounter(convertMs(timeLeft));
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function refreshCounter({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
