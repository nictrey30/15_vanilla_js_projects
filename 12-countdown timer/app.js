const months = [
  'Ianuarie',
  'Februarie',
  'Martie',
  'Aprilie',
  'Mai',
  'Iunie',
  'Iulie',
  'August',
  'Septembrie',
  'Octombrie',
  'Noiembrie',
  'Decembrie'
];
const weekdays = [
  'Duminica',
  'Luni',
  'Marti',
  'Miercuri',
  'Joi',
  'vineri',
  'Sambata'
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const maxDays = 3; // insert here the maximum of random days for the promo to be valid
const randomPromoDays = Math.ceil(Math.random() * maxDays);
// console.log(randomPromoDays); -> a day between 1 and 3

const setFutureDate = () => {
  let futureDate;
  if (!localStorage.getItem('futureDate')) {
    futureDate = new Date(Date.now() + 8.64e7 * randomPromoDays);
    localStorage.setItem('futureDate', futureDate);
  } else {
    futureDate = new Date(localStorage.getItem('futureDate'));
    // if the localStorage time - now < 2h then re-assign futureDate here and in the localStorage
    if (futureDate.getTime() - Date.now() < 72e5) {
      futureDate = new Date(Date.now() + 8.64e7 * randomPromoDays);
      localStorage.setItem('futureDate', futureDate);
      console.log(futureDate.getTime() - Date.now());
    }
  }
  return futureDate;
};

// console.log(
//   `future: ${futureDate}, diff in hours: ${(
//     (futureDate.getTime() - now.getTime()) /
//     36e5
//   ).toFixed(1)}`
// );

let futureDate = setFutureDate();

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Promotia se termina ${weekday}, ${date} ${month} ${year}, ${
  hours < 10 ? '0' + hours : hours
}:${minutes < 10 ? '0' + minutes : minutes} ${(hours > 12
  ? 'pm'
  : 'am'
).toUpperCase()}`;

// future time in ms
let futureTime = futureDate.getTime();
// console.log('future time:', futureTime);

const getRemainingTime = () => {
  const today = new Date().getTime();
  // console.log('today:', today);
  const t = futureTime - today; // -> the diff between future time and now
  // console.log(t);

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = Math.floor(t / oneDay);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds
  };
};

const displayRemainingTime = (remainingTime) => {
  const daysUI = document.querySelector('.days');
  const hoursUI = document.querySelector('.hours');
  const minutesUI = document.querySelector('.minutes');
  const secondsUI = document.querySelector('.seconds');

  const daysSpanUI = document.querySelector('.days + span');
  const hoursSpanUI = document.querySelector('.hours + span');
  const minutesSpanUI = document.querySelector('.minutes + span');
  const secondsSpanUI = document.querySelector('.seconds + span');

  daysUI.textContent = remainingTime.days;
  hoursUI.textContent =
    remainingTime.hours < 10 ? '0' + remainingTime.hours : remainingTime.hours;
  minutesUI.textContent =
    remainingTime.minutes < 10
      ? '0' + remainingTime.minutes
      : remainingTime.minutes;
  secondsUI.textContent =
    remainingTime.seconds < 10
      ? '0' + remainingTime.seconds
      : remainingTime.seconds;

  daysSpanUI.textContent = remainingTime.days === 1 ? 'zi' : 'zile';
  hoursSpanUI.textContent = remainingTime.hours === 1 ? 'ora' : 'ore';
  minutesSpanUI.textContent = remainingTime.minutes === 1 ? 'minut' : 'minute';
  secondsSpanUI.textContent = 'sec';
};

window.addEventListener(
  'DOMContentLoaded',
  displayRemainingTime(getRemainingTime())
);

setInterval(() => {
  let time = getRemainingTime();
  if (time.days === 0 && time.hours < 2) {
    futureDate = setFutureDate();
    futureTime = futureDate.getTime();
  }
  console.log(time.days, time.hours);
  displayRemainingTime(getRemainingTime());
}, 1000);
