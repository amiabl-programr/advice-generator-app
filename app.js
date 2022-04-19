var advice_id = document.querySelector(".advice__id");
var advice_content = document.querySelector(".advice__content");

function getAdvice() {
  const URL = "https://api.adviceslip.com/advice";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      let output_id = "";
      let output_content = "";
      let data_array = Object.entries(data); // flexiple.com/loop-through-object-javascript
      // console.log(data_array[0][1].advice);
      data_array.forEach((advice) => {
        // console.log(advice[1].id);
        // console.log(advice[1].advice);
        output_id += advice[1].id;
        output_content += advice[1].advice;
      });
      advice_id.innerHTML = output_id;
      advice_content.innerHTML = output_content;
    });
}
getAdvice();
// Next.......
// Add an event listener an link it to the button
