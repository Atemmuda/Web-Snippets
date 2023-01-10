const toggle = document.querySelector(".toggle");

// toggle the color changes of the entire page
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

const clockHour = document.querySelector(".hour");
const clockMinute = document.querySelector(".minute");
const clockSecond = document.querySelector(".second");
const DigitalTime = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//mapping the time values from onto the rotation value
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (((num - in_min) * (out_max - out_min)) / (in_max - in_max)) + out_min;
}

function setTime() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();
  const hoursForClock = hour % 12;
  const ampm = hour >= 12 ? "PM" : "AM"
  //console.log(date, month, day, hour, minute, seconds, clockHour)

  clockHour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
  clockMinute.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
  clockSecond.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

  const date = time.getDate();
  const month = time.getMonth();
  const day = time.getDay();
  DigitalTime.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="day">${date}</span>`
}

setTime();

setInterval(setTime, 1000);
