var advice_id = document.querySelector(".advice__id");
var advice_content = document.querySelector(".advice__content");
var dice_container = document.querySelector(".dice__container");
var hourDiv = document.querySelector(".hour");
var minuteDiv = document.querySelector(".minute");
var secondsDiv = document.querySelector(".seconds");
var loadingAnimation = document.querySelector(".lds-hourglass");

getAdvice();
getCurrentDate();

function getAdvice() {
  const URL = "https://api.adviceslip.com/advice";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      let output_id = "";
      let output_content = "";
      data_array = Object.entries(data);
      /* flexiple.com/loop-through-object-javascript ---
         this was done bcos the data fetched is an object, so I had to convert it to an array first */
      data_array.forEach((advice) => {
        // console.log(advice[1].id);
        // console.log(advice[1].advice);
        output_id += advice[1].id;
        output_content += advice[1].advice;

      });
      console.log(`kdjksjdks`)
      advice_id.innerHTML = output_id;
      advice_content.innerHTML = `"${output_content}"`;
    });
}

function getCurrentDate() {

  const date = new Date();

  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  // add suffix AM or PM
  const suffixAmPm = `${hour < 12 ? 'AM' : 'PM'}`;

  // display the time in the html
  hourDiv.textContent = hour;
  minuteDiv.textContent = `${minutes} `;
  secondsDiv.textContent = `${seconds} ${suffixAmPm}`;
  console.log(hour, minutes, seconds)
}


// run the getCurrentDate function every second
setInterval(getCurrentDate, 1000);

// Next.......
// Add an event listener an link it to the button
dice_container.addEventListener("click", getAdvice);
